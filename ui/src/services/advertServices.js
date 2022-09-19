import API from 'API';
import qs from 'query-string';
import ServerException from 'exceptions/serverException';

const advertServices = {
  getAdvertsList: async (id, filters) => {
    const params = qs.stringify({
      ...filters,
      seller: id,
    });
    try {
      const adverts = API.get(`/adverts?${params}`);
      return adverts;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  getAdvertListWithQueries: async (queryParams, signal) => {
    try {
      let params = '';
      // eslint-disable-next-line no-restricted-syntax
      for (const key in queryParams) {
        if (Object.hasOwnProperty.call(queryParams, key)) {
          params += `${key}=${queryParams[key]}&`;
        }
      }
      const adverts = API.get(`/adverts?${params}`, { signal });
      return adverts;
    } catch (err) {
      throw new ServerException(err.response);
    }
  },
  getAdverts: async () => {
    try {
      const adverts = API.get('/adverts');
      return adverts;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  createAdverts: async (advertData) => {
    try {
      const formData = new FormData();
      formData.append('title', advertData.title);
      formData.append('description', advertData.description);
      formData.append('price', advertData.price);
      formData.append('sellerId', advertData.sellerId);
      formData.append('contactName', advertData.contactName);
      formData.append('contactPhone', advertData.contactPhone);
      formData.append('category', advertData.category);
      formData.append('address', advertData.address);
      // eslint-disable-next-line no-restricted-syntax
      for (const image of advertData.images) {
        formData.append('images', image);
      }
      const settings = { headers: { 'Content-Type': 'multipart/form-data' } };
      const createAdverts = await API.post('/adverts', formData, settings);
      return createAdverts;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  getAdvert: async (id) => {
    try {
      const advert = await API.get(`/adverts/${id}`);
      return advert;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  deleteAdvert: async (id) => {
    try {
      const advert = await API.delete(`/adverts/${id}`);
      return advert;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
  modifyAdvert: async (id, {
    title, price, sellerId, description, address,
  }) => {
    try {
      const body = {
        title,
        price,
        sellerId,
        description,
        address,
      };
      const modifyAdvert = await API.patch(`/adverts/${id}`, body);
      return modifyAdvert;
    } catch (e) {
      throw new ServerException(e.response);
    }
  },
};
export default advertServices;
