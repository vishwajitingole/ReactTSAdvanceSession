import { create } from "zustand";

const useCart = create( (set) =>({

    prod : [],

    addToCart: (item) =>
    set((state) => ({
      prod: [...state.prod, item],
    }))


}))

export default useCart;