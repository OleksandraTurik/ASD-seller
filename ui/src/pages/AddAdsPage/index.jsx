/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

// Libraries
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

// Services
import { URL } from 'API';

import advertServices from 'services/advertServices';
// Hooks
import useFetchAdvertById from 'hooks/useFetchAdvertById';
import { useFetchCities } from 'hooks/useFetchCities';
import useFetchCategories from 'hooks/useFetchCategories';
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

const adaptToDefaultValues = (data, isEdit) => {
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
  const { fullName, phoneNumber } = useSelector(state => state.exactUserInfoSlice.data);
  const [isOpen, setModalOpen] = useState(false);
  const [subcategory, setSubcategory] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showInfo, setShowInfo] = useState(true);
  const navigate = useNavigate();
  const { data: categories } = useFetchCategories();
  const { dataAdvert: advertInfo } = useFetchAdvertById(id || '');
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
      contactName: fullName || '',
      contactPhone: phoneNumber || '+380',
      address: '',
      images: '',
      category: '',
    },
  });

  const colorCategory = {
    color: selected ? 'black' : 'red',
  };
  const onSubmit = async (v) => {
    try {
      if (isEdit) {
        await advertServices.editAdverts({
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
        navigate('/profile/adverts');
      } else {
        await advertServices.createAdverts({
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
        navigate('/profile/adverts');
      }
    } catch (e) {
      console.error(e);
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
    const newArray = preview.filter((item, index) => index !== idx);
    const newImg = img.filter((item, index) => index !== idx);
    setPreview(newArray);
    setImg(newImg);
  };
  const pickCategoryName = selected ? selected.name : '???????????????? ??????????????????';
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSorted = () => {
    const newPreview = [...preview];
    const newImg = [...img];
    const dragItems = newPreview.splice(dragItem.current, 1)[0];
    const dragImg = newImg.splice(dragItem.current, 1)[0];

    newPreview.splice(dragOverItem.current, 0, dragItems);
    newImg.splice(dragOverItem.current, 0, dragImg);
    dragItem.current = null;
    dragOverItem.current = null;
    setPreview(newPreview);
    setImg(newImg);
  };
  return (
    <Main>
      <Wrapper>
        <Title>{isEdit ? '?????????????????????? ????????????????????' : '???????????????? ????????????????????'}</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <WhiteBlock>
            <WidthEquation>
              <WhiteBlockTitle>?????????????? ?? ????????????????????</WhiteBlockTitle>
              <LabelForInut htmlFor="title">?????????????? ??????????*</LabelForInut>
              <TitleTextArea
                id="title"
                name="title"
                type="text"
                rows="1"
                onKeyDown={handleKeyDown}
                required
                placeholder="??????????????????, iPhone 8"
                {...register('title', {
                  required: '?????????????????? ???????????????? ?????????????? ????????, ???? ???????????????? ???????????? ????????',
                  minLength: {
                    value: 16,
                    message: '?? ?????????????????? ?????? ???????? ???? ?????????? 16 ????????????????',
                  },
                })}
              />
              <div>{errors.title && <ErrorTitle>{errors.title.message || '?? ?????????????????? ?????? ???????? ???? ?????????? 16 ????????????????'}</ErrorTitle>}</div>
            </WidthEquation>
            <Category style={colorCategory}>??????????????????*</Category>
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
                <Title>???????????????? ??????????????????</Title>
                <CategoryContent>
                  {showInfo ? categories?.map((item) => (
                    <CategoryItems
                      key={item._id}
                      onClick={handleClick(item)}
                    >
                      <ImgCirle src={`${URL}/${item.image}`} alt={`?????????????????? ${item.name}`} />
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
            <WhiteBlockTitle>????????</WhiteBlockTitle>
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
                      key={i}
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
                      {index === 0 ? <LabelImg>??????????????</LabelImg> : null}
                    </ImgSelect>
                  ))}
            </Flex>
          </WhiteBlock>
          <WhiteBlock>
            <WidthEquation>
              <LabelForInut htmlFor="description">????????*</LabelForInut>
              <TitleTextArea
                id="description"
                name="description"
                type="text"
                placeholder="??????????????????, ???? ???? ???????????? ???? ?????????????????? ?? ????????????????????. ?? ?????????????? ???? ?? ????????"
                rows="10"
                {...register('description', {
                  required: '?????????????????? ???????????????? ?????????????? ????????, ???? ???????????????? ???????????? ????????',
                  minLength: {
                    value: 20,
                    message: '?? ?????????????????? ?????? ???????? ???? ?????????? 20 ????????????????',
                  },
                })}
              />
              <div>{errors.description && <ErrorTitle>{errors.description.message || '???????? ?????????????? ???????? ???? ???????????????? ???? 80 ????????????'}</ErrorTitle>}</div>
            </WidthEquation>
          </WhiteBlock>
          <WhiteBlock>
            <CategoryWidthEquation>
              <WhiteBlockTitle>???????? ?????????????????? ????????</WhiteBlockTitle>
              <LabelForInut htmlFor="address">????????????????????????????????*</LabelForInut>
              <Controller
                control={control}
                name="address"
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    placeholder="?????? ?????????????????? ??????????"
                    inputRef={ref}
                    value={cities?.find((c) => c.value === value)}
                    onChange={(val) => onChange(val.value)}
                    options={cities}
                    styles={stylesReactSelectForAddAdsPage}
                    components={{ DropdownIndicator }}
                  />
                )}
              />
              <div>{errors.Location && <ErrorTitle>{errors.Location.message || '?????????????? ????????????????????????????????'}</ErrorTitle>}</div>
              <LabelForInut htmlFor="contactName">?????????????????? ??????????*</LabelForInut>
              <ContactInput
                id="contactName"
                name="contactName"
                placeholder="????'??"
                type="text"
                {...register('contactName', {
                  required: "???????? ??????????, ?????????????? ????'?? ???????????????????? ??????????",
                  minLength: {
                    value: 3,
                    message: "????'?? ???????????????????? ?????????? ?????????????? ???????????????????? ???? ?????????????? ?? 3 ????????????????",
                  },
                })}
              />
              <div>{errors.Author && <ErrorTitle>{errors.Author.message || "????'?? ???????????????????? ?????????? ?????????????? ???????????????????? ???? ?????????????? ?? 3 ????????????????"}</ErrorTitle>}</div>
              <LabelForInut htmlFor="price">???????? ????????????????????</LabelForInut>
              <ContactInput
                id="price"
                name="price"
                placeholder="???????? ????????????????????"
                type="number"
                {...register('price', {
                  valueAsNumber: true,
                })}
              />
              <div>{errors.price && <ErrorTitle>{errors.price.message}</ErrorTitle>}</div>
              <LabelForInut htmlFor="contactPhone">?????????? ????????????????</LabelForInut>
              <ContactInput
                id="contactPhone"
                name="contactPhone"
                placeholder="?????????? ????????????????"
                type="tel"
                {...register('contactPhone')}
              />
              <div>{errors.Number && <ErrorTitle>{errors.Number.message}</ErrorTitle>}</div>
            </CategoryWidthEquation>
          </WhiteBlock>
          <WhiteBlock>
            <PublishButton type="submit" value="????????????????????????">????????????????????????</PublishButton>
          </WhiteBlock>
        </form>
      </Wrapper>
    </Main>
  );
};

export default AddAdsPage;
