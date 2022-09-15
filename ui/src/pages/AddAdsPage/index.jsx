/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import ArrowDownIcon from 'assets/icons/ArrowDown';
import Modal from 'components/Modal/Modal';
import { getCategories } from 'redux/slice/getCategories';
import { useDispatch, useSelector } from 'react-redux';
import DropdownIndicator from 'helpers/DropdownIndicator';
import stylesForReactSelect from 'helpers/stylesForReactSelect';
import ThinArrowRight from 'assets/icons/ThinArrowRight';
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
  ImgCirle,
} from './styled';
import advertServices from '../../services/advertServices';
import { useFetchCities } from '../../components/hooks/useFetchCities';

// eslint-disable-next-line react/prop-types
const AddAdsPage = () => {
  const [isOpen, setModalOpen] = useState(false);
  const [subcategory, setSubcategory] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showInfo, setShowInfo] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoryReducer.data);
  const user = JSON.parse(localStorage.getItem('tokens'));
  const { cities } = useFetchCities();
  const {
    register, handleSubmit, control, reset, formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
      price: '',
      sellerId: user.userDto.id,
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
  const onSubmit = async (v) => {
    console.log(v);
    // if (!selected) {
    //   alert('Введіть категорію');
    // }
    try {
      const send = await advertServices.createAdverts({
        title: v.title,
        description: v.description,
        price: v.price,
        sellerId: v.sellerId,
        contactName: v.contactName,
        contactPhone: v.contactPhone,
        address: v.address,
        images: v.images,
        category: selected._id,
      });
      // reset();
      navigate(`/profiles/${user.userDto.id}/adverts`);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleKeyDown = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  if (categories.loading) {
    return <div>Loading...</div>;
  }

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
  const pickCategoryName = selected ? selected.name : 'Виберіть категорію';

  return (
    <Main>
      <Wrapper>
        <Title>Створити оголошення</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <WhiteBlock>
            <WidthEquation>
              <WhiteBlockTitle>Опишіть у подробицях</WhiteBlockTitle>
              <LabelForInut for="title">Вкажіть назву*</LabelForInut>
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
                      <ImgCirle src={`http://localhost:4000/${item.image}`} alt={`Категорія ${item.name}`} />
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
            <WidthEquation>
              <WhiteBlockTitle>Фото</WhiteBlockTitle>
              <InputFile
                id="images"
                name="images"
                type="file"
                accept="image/heic, image/png, image/jpeg, image/webp"
                multiple
                {...register('images')}
              />
            </WidthEquation>
          </WhiteBlock>
          <WhiteBlock>
            <WidthEquation>
              <LabelForInut for="description">Опис*</LabelForInut>
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
              <LabelForInut for="address">Місцезнаходження*</LabelForInut>
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
                    styles={stylesForReactSelect}
                    components={{ DropdownIndicator }}
                  />
                )}
              />
              <div>{errors.Location && <ErrorTitle>{errors.Location.message || 'Невірне місцезнаходження'}</ErrorTitle>}</div>
              <LabelForInut for="contactName">Контактна особа*</LabelForInut>
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
              <LabelForInut for="price">Ціна оголошення</LabelForInut>
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
              <LabelForInut for="contactPhone">Номер телефону</LabelForInut>
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
