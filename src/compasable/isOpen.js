import { ref } from "vue";
export const isOpen = ref(false);
export function changeIsOpenValue() {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
}
