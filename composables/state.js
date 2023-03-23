import axios from "axios";
export const useAppointmentState = () => useState(() => false);

export const useMenuState = () => useState(() => false);

// const productsArr = await $fetch("/api/product/product");

export const useProducts = () =>
  useState(() => {
    axios("/api/product/product").then((res) => {
      console.log(res.data);
      return res.data;
    });
  });
