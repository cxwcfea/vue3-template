<template>
  <van-nav-bar class="header-bar" title="Human ID" @click-left="handleBack">
    <template #left> <img src="@/assets/header-back.svg" /> </template>
  </van-nav-bar>
  <div class="main">
    <div class="content">
      <div class="user-card">
        <img class="user-card__bg" src="@/assets/earth.svg" />
        <div class="user-card__title">REPUBLIC OF HUMANITY</div>
        <div class="user-card__center">
          <img class="user-card__center--hand" src="@/assets/hand.svg" />
          <div class="user-card__center--info">
            <div class="user-card__center--info-name">HUMAN ID</div>
            <div class="user-card__center--info-value">000 000 105 802</div>
          </div>
        </div>
        <div class="user-card__date">Date of Issue : 09/02/2024</div>
      </div>
    </div>
    <div class="coin">
      <!-- <div class="coin__num">123</div> -->
    </div>
    <div class="record-btn" @click="handleShowRecords">View invitation record <van-icon name="arrow" /></div>
    <div class="invite-btn" @click="showShare = true">
      <img src="@/assets/coin.svg" />
      <span>Invite frinds to earn coins</span>
    </div>
  </div>
  <van-popup
    v-model:show="showRecords"
    class="record-list"
    position="bottom"
    round
    style="height: 70%; padding-top: 20px"
  >
    <div class="record-list__title">invitation records</div>
    <van-list v-model:loading="loading" :finished="true" finished-text="没有更多了">
      <van-cell v-for="(item, i) in records" :key="i" :title="item.id" :value="`${item.value} Coin`" :label="item.ts" />
    </van-list>
  </van-popup>
  <van-share-sheet v-model:show="showShare" title="Share" :options="options" class="share" @select="handleShareSelect">
    <template #cancel>
      <div class="copy"><span>Copy link&nbsp;&nbsp;</span><van-icon name="link-o" /></div>
    </template>
  </van-share-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showRecords = ref(false);
const showShare = ref(false);

const loading = ref(false);

const records = ref([
  {
    id: '000 *** 894',
    ts: '2 minutes ago',
    value: 2,
  },
  {
    id: '000 *** 894',
    ts: '2 minutes ago',
    value: 3,
  },
  {
    id: '000 *** 894',
    ts: '2 minutes ago',
    value: 4,
  },
  {
    id: '000 *** 894',
    ts: '2 minutes ago',
    value: 5,
  },
  {
    id: '000 *** 894',
    ts: '2 minutes ago',
    value: 6,
  },
  {
    id: '000 *** 894',
    ts: '2 minutes ago',
    value: 4,
  },
  {
    id: '000 *** 894',
    ts: '2 minutes ago',
    value: 5,
  },
  {
    id: '000 *** 894',
    ts: '2 minutes ago',
    value: 6,
  },
]);

const options = [
  { name: '', icon: 'wechat' },
  { name: '', icon: 'weibo' },
  { name: '', icon: 'link' },
  { name: '', icon: 'poster' },
  { name: '', icon: 'qrcode' },
];

const handleShowRecords = () => {
  showRecords.value = true;
};

const handleBack = () => {
  console.log('back');
};

const handleShareSelect = (option: { name: string }) => {
  console.log(option);
  showShare.value = false;
};
</script>

<style>
.share {
  .van-share-sheet__cancel:before {
    height: 0;
  }
  .copy {
    margin: 0 auto 20px;
    width: 335px;
    height: 50px;
    border-radius: 15px;
    background: #e5e5e5;
    color: #202020;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'PingFang SC';
    font-size: 14px;
    font-weight: 500;
  }
}
</style>

<style lang="less" scoped>
@font-face {
  font-family: 'DM Mono';
  src: url(@/assets/font/DMMono-Medium.ttf);
}

@font-face {
  font-family: 'Dhurjati';
  src: url(@/assets/font/Dhurjati-Regular.ttf);
}

@font-face {
  font-family: 'DIN';
  src: url(@/assets/font/DIN-Regular.otf);
}

.main {
  // height: 720px;
  height: calc(100vh - 46px);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .user-card {
    position: relative;
    box-sizing: border-box;
    color: #fff;
    margin-top: 30px;
    border-radius: 8px;
    width: 333px;
    height: 212px;
    background: linear-gradient(112.26deg, #3b3e43 -2.56%, #08090b 89.66%);

    &__bg {
      width: 196px;
      height: 197px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    &__title {
      margin-top: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'DM Mono', sans-serif;
      font-size: 13px;
      z-index: 3;

      &:before {
        content: '';
        width: 40px;
        height: 1px;
        margin-right: 16px;
        background: linear-gradient(270.01deg, #ffffff 0.01%, rgba(255, 255, 255, 0) 100%);
      }

      &:after {
        content: '';
        width: 40px;
        height: 1px;
        margin-left: 16px;
        background: linear-gradient(-270.01deg, #ffffff 0.01%, rgba(255, 255, 255, 0) 100%);
      }
    }

    &__center {
      position: absolute;
      top: 70px;
      left: 55px;
      display: flex;
      align-items: center;

      &--hand {
        width: 63.5px;
        height: 73.7px;
      }

      &--info {
        margin-top: 3px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &-name {
          font-family: 'DM Mono', sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 6px;
        }
        &-value {
          font-family: 'Dhurjati', sans-serif;
          font-size: 15px;
          // line-height: 86%; /* 12.9px */
        }
      }
    }

    &__date {
      position: absolute;
      bottom: 15px;
      font-family: 'DIN', sans-serif;
      font-size: 11px;
      color: rgba(255, 255, 255, 0.7);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.coin {
  margin-top: 85px;
  width: 142px;
  height: 142px;
  flex-shrink: 0;
  background: center / contain no-repeat url(@/assets/coin.svg);
  // color: linear-gradient(180deg, #bd6d09 0%, #d4892a 100%);

  // &__num {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  // }
}

.record-btn {
  margin-top: 127px;
  color: #000;
  font-family: 'PingFang SC';
  font-size: 14px;
  line-height: 129%; /* 18.06px */
}

.invite-btn {
  margin-top: 15px;
  margin-bottom: 40px;
  width: 335px;
  height: 50px;
  border-radius: 15px;
  background: #212120;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'PingFang SC';
  font-size: 14px;
  font-weight: 500;
  img {
    margin-right: 7px;
    width: 32px;
    height: 32px;
  }
}
.record-list {
  &__title {
    margin-bottom: 25px;
    font-family: 'PingFang SC';
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
}
</style>
