/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

// Libraries
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

// Slices
import { getCategories } from 'redux/slice/getCategories';

// Services
import { URL } from 'API';
import advertServices from 'services/advertServices';

// Hooks
import { useFetchCities } from 'components/hooks/useFetchCities';

// Components
import Modal from 'components/Modal/Modal';

// Icons
import ArrowDownIcon from 'assets/icons/ArrowDown';
import ThinArrowRight from 'assets/icons/ThinArrowRight';

import DropdownIndicator from 'helpers/DropdownIndicator';
import { stylesReactSelectForAddAdsPage } from 'helpers/stylesForReactSelect';

// Styles
import {
  Main,
  Wrapper,
  Title,
  WhiteBlock,
  WidthEquation,
  WhiteBlockTitle,
  LabelForInut,
  TitleTextArea,
  ErrorTitle,
  Category,
  CategoryWidthEquation,
  PickCategory,
  PInPickCategory,
  ContactInput,
  PublishButton,
  InputFile, CategoryItems, CategoryContent,
  CategoryListItem, CategoryList,
  ImgCirle, Image,
  Flex, ImgSelect, LabelImg,
} from './styled';
import { getAdvertThunk } from '../../redux/slice/getAdvert';
import Loader from '../../components/common/Loader';
import DeleteTrash from '../../assets/icons/DeleteTrash';

const adaptToDefaultValues = (data, isEdit) => {
  console.log(isEdit);
  if (isEdit) {
    return ({
      title: data.title,
      price: data.price,
      description: data.description,
      address: data.address?._id,
      category: data.category?.child._id,
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      sellerId: data.sellerId,
    });
  }
  return ({
    title: '',
    price: '',
    description: '',
    address: '',
    contactName: '',
    contactPhone: '',
    sellerId: '',
  });
};

// eslint-disable-next-line react/prop-types
const AddAdsPage = () => {
  const { id } = useParams();
  const isEdit = !!id;

  const [isOpen, setModalOpen] = useState(false);
  const [subcategory, setSubcategory] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showInfo, setShowInfo] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoryReducer.data);
  const { advertInfo, loading } = useSelector(state => state.getAdvert);
  const user = JSON.parse(localStorage.getItem('tokens'));
  const [selectedFile, setSelectedFile] = useState();
  const [img, setImg] = useState([]);
  const [preview, setPreview] = useState([]);
  const [maxUploadsImages, setMaxUploadsImages] = useState(false);
  const { cities } = useFetchCities();
  const {
    register, handleSubmit, reset, control, formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
      price: '',
      contactName: '',
      contactPhone: '+380',
      address: '',
      images: '',
      category: '',
    },
  });

  const colorCategory = {
    color: selected ? 'black' : 'red',
  };
  console.log(selected);
  const onSubmit = async (v) => {
    try {
      if (isEdit) {
        const send = await advertServices.editAdverts({
          title: v.title,
          description: v.description,
          price: v.price,
          sellerId: user.userDto.id,
          contactName: v.contactName,
          contactPhone: v.contactPhone,
          address: v.address,
          images: img,
          category: selected._id,
        }, id);
        navigate(`/profiles/${user.userDto.id}/adverts`);
      } else {
        const send = await advertServices.createAdverts({
          title: v.title,
          description: v.description,
          price: v.price,
          sellerId: user.userDto.id,
          contactName: v.contactName,
          contactPhone: v.contactPhone,
          address: v.address,
          images: img,
          category: selected._id,
        });
        navigate(`/profiles/${user.userDto.id}/adverts`);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleKeyDown = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useEffect(() => {
    if (advertInfo && Object.keys(advertInfo).length > 0) {
      reset(adaptToDefaultValues(advertInfo, isEdit));
    }
    if (isEdit) {
      reset(adaptToDefaultValues(advertInfo, isEdit));
      setSelected(advertInfo.category?.child);
    } else {
      setSelected(null);
    }
  }, [advertInfo, isEdit]);

  useEffect(() => {
    dispatch(getCategories());
    if (isEdit) {
      dispatch(getAdvertThunk(id));
    }
  }, [dispatch, isEdit]);

  useEffect(() => {
    setShowInfo(true);
  }, [isOpen]);

  const toggleModal = () => setModalOpen((prevState) => !prevState);

  const handleClick = (category) => () => {
    if (category.children?.length) {
      setShowInfo(false);
      setSubcategory(category);
    } else {
      setSelected(category);
      setModalOpen(false);
    }
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview([]);
      return;
    }

    // eslint-disable-next-line guard-for-in,no-restricted-syntax,no-plusplus
    for (let i = 0; i < selectedFile.length; i++) {
      setPreview(prevState => [...prevState, window.URL.createObjectURL(selectedFile[i])]);
    }
  }, [selectedFile]);

  const onSelectFile = e => {
    if (img.length >= 6) {
      setMaxUploadsImages(true);
    }
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files);
    setImg(prevState => [...prevState, ...e.target.files]);
  };
  const deleteImg = (idx) => {
    console.log(idx);
    const newArray = preview.filter((item, index) => index !== idx);
    const newImg = img.filter((item, index) => index !== idx);
    setPreview(newArray);
    setImg(newImg);
  };
  const pickCategoryName = selected ? selected.name : 'Виберіть категорію';
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSorted = () => {
    const newPreview = [...preview];
    const dragItems = newPreview.splice(dragItem.current, 1)[0];

    newPreview.splice(dragOverItem.current, 0, dragItems);
    dragItem.current = null;
    dragOverItem.current = null;
    setPreview(newPreview);
  };
  return (
    <Main>
      <Wrapper>
        <Title>{isEdit ? 'Редагування оголошення' : 'Створити оголошення'}</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <WhiteBlock>
            <WidthEquation>
              <WhiteBlockTitle>Опишіть у подробицях</WhiteBlockTitle>
              <LabelForInut htmlFor="title">Вкажіть назву*</LabelForInut>
              <TitleTextArea
                id="title"
                name="title"
                type="text"
                rows="1"
                onKeyDown={handleKeyDown}
                required
                placeholder="Наприклад, iPhone 8"
                {...register('title', {
                  required: 'Заголовок відіграє важливу роль, не забудьте додати його',
                  minLength: {
                    value: 16,
                    message: 'У заголовку має бути не менше 16 символів',
                  },
                })}
              />
              <div>{errors.title && <ErrorTitle>{errors.title.message || 'У заголовку має бути не менше 16 символів'}</ErrorTitle>}</div>
            </WidthEquation>
            <Category style={colorCategory}>Категорія*</Category>
            <CategoryWidthEquation>
              <PickCategory
                role="button"
                type="button"
                onClick={toggleModal}
              >
                <PInPickCategory>{pickCategoryName}</PInPickCategory>
                <ArrowDownIcon
                  style={{ color: 'rgb(0, 47, 52)' }}
                  height="24px"
                />
              </PickCategory>
              <Modal open={isOpen} onClose={toggleModal}>
                <Title>Виберіть категорію</Title>
                <CategoryContent>
                  {showInfo ? categories.map((item) => (
                    <CategoryItems
                      key={item._id}
                      onClick={handleClick(item)}
                    >
                      <ImgCirle src={`${URL}/${item.image}`} alt={`Категорія ${item.name}`} />
                      {item.name}
                    </CategoryItems>
                  )) : (
                    <div style={{ display: 'flex' }}>
                      <CategoryList>
                        {categories.map((item) => (
                          <CategoryListItem
                            selected={item._id === subcategory?._id}
                            key={item._id}
                            onClick={handleClick(item)}
                          >
                            <div>
                              {item.name}
                            </div>
                            <div>
                              {item.children.length
                                ? <ThinArrowRight width="25px" /> : null}
                            </div>
                          </CategoryListItem>
                        ))}
                      </CategoryList>
                      {(subcategory && subcategory.children?.length) && (
                        <CategoryList>
                          {subcategory.children.map((item) => (
                            <CategoryListItem
                              key={item._id}
                              selected={item._id === subcategory?._id}
                              onClick={handleClick(item)}
                            >
                              {item.name}
                              <div>
                                {item.children.length
                                  ? <ThinArrowRight width="25px" /> : null}
                              </div>
                            </CategoryListItem>
                          ))}
                        </CategoryList>
                      )}
                    </div>
                  )}
                </CategoryContent>
              </Modal>
            </CategoryWidthEquation>
          </WhiteBlock>
          <WhiteBlock>
            <WhiteBlockTitle>Фото</WhiteBlockTitle>
            <Flex>
              {!maxUploadsImages ? (
                <InputFile
                  id="images"
                  name="images"
                  type="file"
                  multiple
                  accept="image/heic, image/png, image/jpeg, image/webp"
                  {...register('images', {
                    onChange: onSelectFile,
                  })}
                />
              ) : ''}
              {selectedFile
                  && preview.map((i, index) => (
                    <ImgSelect
                      onClick={() => deleteImg(index)}
                        /* eslint-disable-next-line no-return-assign */
                      onDragStart={() => dragItem.current = index}
                      /* eslint-disable-next-line no-return-assign */
                      onDragEnter={() => dragOverItem.current = index}
                      onDragEnd={handleSorted}
                      onDragOver={(e) => e.preventDefault()}
                      draggable
                    >
                      <Image
                        src={i}
                        alt="preview"
                      />
                      {index === 0 ? <LabelImg>Головне</LabelImg> : null}
                    </ImgSelect>
                  ))}
            </Flex>
          </WhiteBlock>
          <WhiteBlock>
            <WidthEquation>
              <LabelForInut htmlFor="description">Опис*</LabelForInut>
              <TitleTextArea
                id="description"
                name="description"
                type="text"
                placeholder="Подумайте, що ви хотіли би дізнатися з оголошення. І додайте це в опис"
                rows="10"
                {...register('description', {
                  required: 'Заголовок відіграє важливу роль, не забудьте додати його',
                  minLength: {
                    value: 20,
                    message: 'У заголовку має бути не менше 20 символів',
                  },
                })}
              />
              <div>{errors.description && <ErrorTitle>{errors.description.message || 'Опис повинен бути не коротшим за 80 знаків'}</ErrorTitle>}</div>
            </WidthEquation>
          </WhiteBlock>
          <WhiteBlock>
            <CategoryWidthEquation>
              <WhiteBlockTitle>Ваші контактні дані</WhiteBlockTitle>
              <LabelForInut htmlFor="address">Місцезнаходження*</LabelForInut>
              <Controller
                control={control}
                name="address"
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    placeholder="Ваш населений пункт"
                    inputRef={ref}
                    value={cities?.find((c) => c.value === value)}
                    onChange={(val) => onChange(val.value)}
                    options={cities}
                    styles={stylesReactSelectForAddAdsPage}
                    components={{ DropdownIndicator }}
                  />
                )}
              />
              <div>{errors.Location && <ErrorTitle>{errors.Location.message || 'Невірне місцезнаходження'}</ErrorTitle>}</div>
              <LabelForInut htmlFor="contactName">Контактна особа*</LabelForInut>
              <ContactInput
                id="contactName"
                name="contactName"
                placeholder="Ім'я"
                type="text"
                {...register('contactName', {
                  required: "Будь ласка, вкажіть ім'я контактної особи",
                  minLength: {
                    value: 3,
                    message: "Ім'я контактної особи повинно складатись як мінімум з 3 символів",
                  },
                })}
              />
              <div>{errors.Author && <ErrorTitle>{errors.Author.message || "Ім'я контактної особи повинно складатись як мінімум з 3 символів"}</ErrorTitle>}</div>
              <LabelForInut htmlFor="price">Ціна оголошення</LabelForInut>
              <ContactInput
                id="price"
                name="price"
                placeholder="Ціна оголошення"
                type="number"
                {...register('price', {
                  valueAsNumber: true,
                })}
              />
              <div>{errors.price && <ErrorTitle>{errors.price.message}</ErrorTitle>}</div>
              <LabelForInut htmlFor="contactPhone">Номер телефону</LabelForInut>
              <ContactInput
                id="contactPhone"
                name="contactPhone"
                placeholder="Номер телефону"
                type="tel"
                {...register('contactPhone')}
              />
              <div>{errors.Number && <ErrorTitle>{errors.Number.message}</ErrorTitle>}</div>
            </CategoryWidthEquation>
          </WhiteBlock>
          <WhiteBlock>
            <PublishButton type="submit" value="Опублікувати">Опублікувати</PublishButton>
          </WhiteBlock>
        </form>
      </Wrapper>
    </Main>
  );
};

export default AddAdsPage;
