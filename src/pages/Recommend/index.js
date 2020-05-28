import React, { memo, useEffect } from 'react'
import { connect } from "react-redux"
import * as recommendAction from '../../store/recommend'
import Head from '../../components/Head'
import Contain from '../../components/Contain'
import Line from '../../components/Line'
import Square from '../../components/Square'
import Tabs, { TabItem } from '../../components/Tabs'
import Scroll from '../../components/Scroll'
import './index.less'
function Recommend() {

    let left = {
        icon: 'sousuo'
    }

    let right = {
        icon: 'caidan'
    }

    let recommend = [
        {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589109271088&di=2fdcc6c50d17aefd4ef3baf47fd20cf7&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F420%2Fw608h612%2F20180514%2Fb9eb-hapkuvk2791626.jpg',
            name: '田村我好爱你呀怎么办啊痛苦死了喂在吗',
            desc: '没有嘛'
        },
        {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589109271088&di=2fdcc6c50d17aefd4ef3baf47fd20cf7&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F420%2Fw608h612%2F20180514%2Fb9eb-hapkuvk2791626.jpg',
            name: '田村我好爱你呀怎么办啊痛苦死了喂在吗',
        },
        {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589109271088&di=2fdcc6c50d17aefd4ef3baf47fd20cf7&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F420%2Fw608h612%2F20180514%2Fb9eb-hapkuvk2791626.jpg',
            name: '田村我好爱你呀怎么办啊痛苦死了喂在吗',
            round: true
        },
        {
            name: '田村我好爱你呀怎么办啊痛苦死了喂在吗',
            desc: '没有嘛',
            round: true
        }
    ]

    let TabList = [
        {
            title: '主页',
            icon: 'iconzhuye',
            children: 123
        },
        {
            title: '搜索',
            icon: 'iconsousuo',
            children: 456
        },
        {
            title: '排行',
            icon: 'iconliuyan',
            children: 789
        },
        {
            title: '我的',
            icon: 'icongeren',
            children: 101112
        }
    ]

    const daily = (()=>(
        recommend.map((item,index)=>(
            <Line {...item} icon="gengduo" key={index} index={index}/>
        ))
    ))()

    const news = (()=>{
        let length = recommend.length%3;
        recommend = [...recommend,...new Array(length).fill({})];
        return recommend.map((item,index)=>(
            <Square {...item} icon="gengduo" key={index} index={index}/>
        ))
    })()

    return (
        <div className="recommend">
            <Scroll>
            <Head 
                left={left}
                right={right}
            />
            <Contain title="每日单曲推荐">
                {
                    daily
                }
            </Contain>
            <Contain title="最新专辑">
                <div className="flex-wrap">
                    {
                        news
                    }
                </div>
            </Contain>
            <Tabs>
                {
                    TabList.map((item)=>{
                        return <TabItem title={item.title} key={item.title} line/>
                    })
                }
            </Tabs>
            <Tabs bottom animation>
                {
                    TabList.map((item)=>
                        (<TabItem title={item.title} key={item.title} icon={item.icon}>
                            { item.children }
                        </TabItem>)
                    )
                }
            </Tabs>
            </Scroll>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    // 不要在这里将数据 toJS
    // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
    bannerList: state.getIn (['recommend', 'bannerList']),
    recommendList: state.getIn (['recommend', 'recommendList']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch () {
            // dispatch (actionTypes.getBannerList ());
        },
        getRecommendListDataDispatch () {
            // dispatch (actionTypes.getRecommendList ());
        },
    }
};
  
//   // 将 ui 组件包装成容器组件
export default connect (mapStateToProps, mapDispatchToProps)(memo(Recommend));