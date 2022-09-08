import API from '../API';
import ServerException from '../exceptions/serverException';

const advertServices = {
  getAdvertsList: async (id, page) => {
    try {
      const adverts = API.get(`http://localhost:4000/api/adverts?seller=${id}&page=${page}`);
      return adverts;
    } catch (e) {
      throw new ServerException(e.response);
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
  createAdverts: async ({
    title,
    price,
    sellerId,
    category,
    description,
    address,
  }) => {
    try {
      const body = {
        title,
        price,
        sellerId,
        category,
        description,
        address,
      };
      console.log(body);
      const createAdverts = await API.post('/adverts', body);
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
    title,
    price,
    sellerId,
    description,
    address,
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
