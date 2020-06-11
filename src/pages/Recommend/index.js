import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBannerList, getRecommendList } from '../../store/recommend'
import Head from '../../components/Head'
import Contain from '../../components/Contain'
import Line from '../../components/Line'
import Square from '../../components/Square'
import Tabs, { TabItem } from '../../components/Tabs'
import Scroll from '../../components/Scroll'
import Banner from '../../components/Banner'
import './index.less'
export default memo(function Recommend() {
    const dispatch = useDispatch()
    useEffect (() => {
        // dispatch(getBannerList());
        // dispatch(getRecommendList());
    }, []);
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

    let banners = [
        {
            id: 1,
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590810303097&di=3c2cf67d69c6a27d4a2ea2aef85884bc&imgtype=0&src=http%3A%2F%2Fcdn.52ppt.com%2Fd%2Ffile%2Fbeijing%2F201307%2F2013071121053442.jpg'
        },
        {
            id: 2,
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590810399931&di=6eff0baeaa3bd85f3f0a44dba2d4fe55&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111123%2F8830238_191314807000_2.jpg'
        },
        {
            id: 3,
            url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1444849906,3162001783&fm=26&gp=0.jpg'
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
            {/* <Scroll> */}
            <Banner 
                banners={banners}
                loop
            />
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
            {/* </Scroll> */}
            
        </div>
    )
})
