<template>
    <div>
        <headerview></headerview>
            <van-row  class="body">
                <van-button type="default">默认按钮</van-button>
                <van-button type="primary">主要按钮</van-button>
                <van-button type="info">信息按钮</van-button>
                <van-button type="warning">警告按钮</van-button>
                <van-button type="danger">危险按钮</van-button>
                <van-grid square :border="false" :column-num="3">
                    <van-grid-item
                        v-for="value in 36"
                        :key="value"
                        icon="photo-o"
                        text="文字"
                    />
                </van-grid>
            </van-row>
         <footerview></footerview>
    </div>
</template>
<script>
import baseMixin from '@/mixins'
export default {
    name:'main-view',
    mixins:[baseMixin],
    data(){
        return{

        }
    },
}
</script>