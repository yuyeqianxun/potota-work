import React, { memo } from 'react'
import Head from '../../components/Head'
import Contain from '../../components/Contain'
import Line from '../../components/Line'
import Square from '../../components/Square'
import Tabs, { TabItem } from '../../components/Tabs'
import './index.less'
export default memo(function Recommend() {

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
            title: '主页'
        },
        {
            title: '搜索'
        },
        {
            title: '排行'
        },
        {
            title: '我的'
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
        </div>
    )
})
