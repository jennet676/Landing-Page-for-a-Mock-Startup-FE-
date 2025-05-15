<template>
  <div
    class="mt-[0px] mb-[0px] h-[80px] text-2xl mb-[0] mt-[5] bg-[#1F1F30] text-white text-[16px]"
  >
    <div class="w-250 mx-auto">
      <div class="flex items-center justify-between pt-5">
        <!-- first  -->
        <div>
          <img
            class="h-[40px] w-[100%]"
            src="https://cdbaby.com/wp-content/themes/cdbaby_theme/assets/images/svgs/CDB_Logo_BlueSmall.svg"
            alt=""
          />
        </div>

        <!-- Second -->
        <div class="flex gap-4">
          <div
            :class="'z-5',
              isOpen
                ? 'bg-[#40BCD0] underline  text - [rgb(67, 50, 220)],'
                : 'hover: text - [rgb(67, 50, 220)],'
            "
          >
            <router-link
              to="/"
              exact-active-class="active"
              ref="headline"
              @mouseover="changeIsOpenValue"
              @mouseout="changeIsOpenValue"
              >Music Distribution</router-link
            >

            <div v-if="isOpen" class="w-20 h-10 bg-[#40BCD0]"></div>
          </div>
          <div class="hover:text-[rgb(67,50,220)]">
            <router-link to="CDB Boost" exact-active-class="active"
              >CDB Boost</router-link
            >
          </div>
          <div class="hover:text-[rgb(67,50,220)]">
            <router-link to="Pricing" exact-active-class="active"
              >Pricing</router-link>
          </div>

          <div class="hover:text-[rgb(67,50,220)]">
            <router-link to="Log In" exact-active-class="active"
              >Log In</router-link>
          </div>

      <button class="hover:text-[rgb(67,50,220)] ">
            <router-link to="GET STARTED" exact-active-class="active"
              >Get Started</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { isOpen, changeIsOpenValue } from "../compasable/isOpen.js";
</script>
