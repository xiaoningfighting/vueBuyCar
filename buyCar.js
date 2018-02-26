/**
 * Created by 张瑞琴 on 2018/1/5.
 */
var demo=new Vue({
    el:"#app",
    data:{
        totalPrice:0,
        animatenum:0,
        message:[
            {
                id:"001",
                name:"华为荣耀7",
                quantity:3,//产品数量
                price: 1500 ,//产品单价
                checked:false
            },
            {
                id:"002",
                name:"华为荣耀8",
                quantity:3,//产品数量
                price: 1700, //产品单价
                checked:false
            }, {
                id:"003",
                name:"华为荣耀9",
                quantity:3,//产品数量
                price: 2399 ,//产品单价
                checked:false
            },
            {
                id:"004",
                name:"华为P10",
                quantity:3,//产品数量
                price: 3488 ,//产品单价
                checked:false
            }
        ]
    },
    filters:{
        filtermoney:function(value){
            return '￥'+value;
        }
    },
    computed:{//计算总价
        toCompute2:function(){
            var vm=this;
            vm.totalPrice=0;
            vm.message.forEach(function(mess){
                if(mess.checked){
                    vm.totalPrice+=parseInt(mess.quantity*mess.price);
                }

            });
            return vm.totalPrice;
        },
        toCompute3:function(){
            var vm=this;
            vm.animatenum=0;
            vm.message.forEach(function(mess){
                if(mess.checked) {
                    vm.animatenum += mess.quantity;
                }
            });
            return  vm.animatenum;
        }

    },
    methods:{
        subtract:function(index){//产品数量-1
            var vm=this;
            vm.message[index].quantity--;
            if(vm.message[index].quantity<=0){
                if(confirm("你确定移除该商品？")){
                    vm.message.splice(index,1);
                }
            }
            vm.totalPrice=vm.toCompute2;
            vm.animatenum=vm.toCompute3;
        },
        add:function(index){//产品数量+1
            var vm=this;
            vm.message[index].quantity++;
            vm.totalPrice=vm.toCompute2;
            vm.animatenum=vm.toCompute3;
        },
        remove:function(index){//移除某一产品
            var vm=this;
            if(confirm("你确定移除该商品？")){
                vm.message.splice(index,1);
            }
            vm.totalPrice=vm.toCompute2;
            vm.animatenum=vm.toCompute3;
        },
        checkedCar:function(index){

            var vm=this;
            vm.message[index].checked=(!vm.message[index].checked)

            vm.totalPrice=vm.toCompute2;
            vm.animatenum=vm.toCompute3;
        },
        empty:function(index){//清空购物车
            var vm=this;
            vm.message.splice(0,vm.message.length);
            vm.totalPrice=vm.toCompute2;
            vm.animatenum=vm.toCompute3;
        }

    }
});
demo.totalPrice=demo.toCompute2;
demo.animatenum=demo.toCompute3;
