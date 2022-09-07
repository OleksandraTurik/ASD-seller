/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ArrowDownIcon from 'assets/icons/ArrowDown';
import Modal from 'components/Modal/Modal';
import { getCategories } from 'redux/slice/getCategories';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import avtoImg from 'assets/img/rubryky/avto.png';
import advertServices from '../../services/advertServices';
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
} from './styled';

// eslint-disable-next-line react/prop-types
const AddAdsPage = () => {
  const [isOpen, setModalOpen] = useState(false);
  const [subcategory, setSubcategory] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showInfo, setShowInfo] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoryReducer.data);
  const userId = useSelector(state => state.userReducer.user.id);
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: 'I love donezk and luganskI love donezk and lugansk',
      price: '200',
      sellerId: userId,
      description: 'I love donezk and luganskI love donezk and lugansk',
      address: 'I love donezk and luganskI love donezk and lugansk',
    },
  });
  const colorCategory = {
    color: selected ? 'black' : 'red',
  };
  const onSubmit = async (v) => {
    if (!selected) {
      alert('Введіть категорію');
    }
    try {
      const send = await advertServices.createAdverts({
        title: v.title,
        price: v.price,
        sellerId: v.sellerId,
        category: selected._id,
        description: v.description,
        address: v.address,
      });
      reset();
      navigate(`/profiles/${userId}/adverts`);
    } catch (e) {
      console.log('error');
    }
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
              <PickCategory role="button" type="button" onClick={toggleModal}>
                <PInPickCategory>{pickCategoryName}</PInPickCategory>
                <ArrowDownIcon style={{ color: 'rgb(0, 47, 52)' }} height="24px" width="24px" />
              </PickCategory>
              <Modal open={isOpen} onClose={toggleModal}>
                <CategoryContent>
                  {showInfo ? categories.map((item) => (
                    <CategoryItems key={item._id} onClick={handleClick(item)}>
                      <img style={{ width: '48px' }} src={avtoImg} alt="avto" />
                      {item.name}
                    </CategoryItems>
                  )) : (
                    <div style={{ display: 'flex' }}>
                      <CategoryList>
                        {categories.map((item) => (
                          <CategoryListItem selected={item._id === subcategory?._id} key={item._id} onClick={handleClick(item)}>
                            <div>
                              {item.name}
                            </div>
                            <div>
                              {item.children.length ? '>' : null}
                            </div>
                          </CategoryListItem>
                        ))}
                      </CategoryList>
                      {(subcategory && subcategory.children?.length) && (
                        <CategoryList>
                          {subcategory.children.map((item) => (
                            <CategoryListItem selected={item._id === subcategory?._id} onClick={handleClick(item)}>{item.name}</CategoryListItem>
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
                id="photos"
                name="photos"
                type="file"
                accept="image/heic, image/png, image/jpeg, image/webp"
                multiple
                {...register('Photos')}
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
                required
                placeholder="Подумайте, що ви хотіли би дізнатися з оголошення. І додайте це в опис"
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
              <LabelForInut for="location">Місцезнаходження*</LabelForInut>
              <ContactInput
                id="address"
                name="address"
                placeholder="Назва міста"
                type="text"
                {...register('address', {
                  required: 'Невірне місцезнаходження',
                  minLength: {
                    value: 1,
                    message: 'Невірне місцезнаходження',
                  },
                })}
              />
              <div>{errors.Location && <ErrorTitle>{errors.Location.message || 'Невірне місцезнаходження'}</ErrorTitle>}</div>
              <LabelForInut for="author">Контактна особа*</LabelForInut>
              <ContactInput
                id="author"
                name="author"
                placeholder="Ім'я"
                type="text"
                {...register('Author', {
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
              <LabelForInut for="number">Номер телефону</LabelForInut>
              <ContactInput
                id="number"
                name="number"
                placeholder="Номер телефону"
                type="tel"
                {...register('Number')}
              />
              <div>{errors.Number && <ErrorTitle>{errors.Number.message}</ErrorTitle>}</div>
            </CategoryWidthEquation>
          </WhiteBlock>
          <WhiteBlock>
            <PublishButton type="submit" value="Опублікувати" style={{ float: 'right' }}>Опублікувати</PublishButton>
          </WhiteBlock>
        </form>
      </Wrapper>
    </Main>
  );
};

export default AddAdsPage;
