import produce from "immer";
import { getBannerRequest, getRecommendListRequest } from '../api';

const defaultState = {
  bannerList: [],
  recommendList: [],
};

const type = {
  CHANGE_BANNER: "recommend/CHANGE_BANNER",
  CHANGE_RECOMMEND_LIST: "recommend/RECOMMEND_LIST",
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case type.CHANGE_BANNER:
      draft.bannerList = action.data
  }
}, defaultState);

export const changeBannerList = (data) => ({
  type: type.CHANGE_BANNER,
  data: data,
});

export const changeRecommendList = (data) => ({
  type: type.CHANGE_RECOMMEND_LIST,
  data: data,
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then((data) => {
        dispatch(changeBannerList(data.banners));
      })
      .catch((err) => {
        console.log(err,"轮播图数据传输错误");
      });
  };
};

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
      .then((data) => {
        dispatch(changeRecommendList(data.result));
      })
      .catch(() => {
        console.log("推荐歌单数据传输错误");
      });
  };
};

export default reducer;