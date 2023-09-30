import Swal from "sweetalert2";
import {
  CATEGORY_FETCH_BYID_SUCCESS,
  CATEGORY_FETCH_FAILED,
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCESS,
  INGREDIENTS_FETCH_FAILED,
  INGREDIENTS_FETCH_REQUEST,
  INGREDIENTS_FETCH_SUCCESS,
  ITEM_FETCH_BYID_SUCCESS,
  ITEM_FETCH_FAILED,
  ITEM_FETCH_REQUEST,
  ITEM_FETCH_SUCCESS,
} from "./actionTypes";
const BASE_URL = "https://zahra.ninoambara.tech/";

export const fetchCategoryRequest = () => {
  return {
    type: CATEGORY_FETCH_REQUEST,
  };
};

export const fetchCategorySuccess = (data) => {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchCategoryFailed = (data) => {
  return {
    type: CATEGORY_FETCH_FAILED,
    payload: data,
  };
};

export const fetchCategoryByIdSuccess = (data) => {
  return {
    type: CATEGORY_FETCH_BYID_SUCCESS,
    payload: data,
  };
};

export const fetchAsyncCategorySuccess = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoryRequest());
      const response = await fetch(BASE_URL + "categories", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw new Error("Fetch Failed");
      }

      const data = await response.json();
      const action = fetchCategorySuccess(data);
      dispatch(action);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (response.ok) {
        dispatch(fetchAsyncCategorySuccess());
      } else {
        console.log("Delete failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchAsyncCategoryById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "categories/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw {
          msg: "fetching error",
        };
      }
      const data = await response.json();
      const action = fetchCategoryByIdSuccess(data);
      dispatch(action);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchItemRequest = () => {
  return {
    type: ITEM_FETCH_REQUEST,
  };
};

export const fetchItemSuccess = (data) => {
  return {
    type: ITEM_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchItemFailed = (data) => {
  return {
    type: ITEM_FETCH_FAILED,
    payload: data,
  };
};

export const fetchItemsByIdSuccess = (data) => {
  return {
    type: ITEM_FETCH_BYID_SUCCESS,
    payload: data,
  };
};

export const fetchAsyncItems = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchItemRequest());
      const response = await fetch(BASE_URL + "items", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw {
          msg: "fetching error",
        };
      }

      const data = await response.json();
      const action = fetchItemSuccess(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAsyncItemsById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "items/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw {
          msg: "fetching error",
        };
      }
      const data = await response.json();
      const action = fetchItemsByIdSuccess(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteItems = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `items/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (response.ok) {
        console.log("delete success");
        dispatch(fetchAsyncItems());
      } else {
        console.log("delele failed");
      }
    } catch (error) {
      console.log("delete failed");
    }
  };
};

export const addNewProduct = (inputNewProduct, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(inputNewProduct),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product success added",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message;
        throw { errorMessage };
      }
    } catch (error) {
      throw error
    }
  };
};

export const addNewCategory = (inputNewCategory, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(inputNewCategory),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Categories success added",
          showConfirmButton: false,
          timer: 1500,
        });

      }else{
        const errorData = await response.json();
        const errorMessage = errorData.message;
        throw { errorMessage };
      }
    } catch (error) {
      throw error
    }
  };
};

export const register = (inputNewUser, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "register-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(inputNewUser),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message;
        throw { errorMessage };
      }

    } catch (error) {
      throw error
    }
  };
};

export const editProduct = (productId, updatedProduct, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}items/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product edited successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }else {
        const errorData = await response.json();
        const errorMessage = errorData.message;
        throw { errorMessage };
      }
    } catch (error) {
      throw(error)
    }
  };
};

export const editCategory = (categoryId, updatedCategory, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}categories/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(updatedCategory),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category edited successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }else {
        const errorData = await response.json();
        const errorMessage = errorData.message;
        throw { errorMessage };
      }
    } catch (error) {
      throw(error)
    }
  };
};

export const login = (inputLogin, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "login-admin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputLogin),
      });

      if (response.ok) {
        const responseData = await response.json();
        const accessToken = responseData.access_token;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login success ",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("id", responseData.id);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message;
        throw { errorMessage };
      }
    } catch (error) {
      throw error
    }
  };
};

export const ingredientFetchRequest = () => {
  return {
    type: INGREDIENTS_FETCH_REQUEST,
  };
};

export const ingredientFetchSuccess = (data) => {
  return {
    type: INGREDIENTS_FETCH_SUCCESS,
    payload: data,
  };
};

export const ingredientFetchFailed = (data) => {
  return {
    type: INGREDIENTS_FETCH_FAILED,
    payload: data,
  };
};

export const fetchAsyncIngredients = (id) => {
  return async (dispatch) => {
    try {
      dispatch(ingredientFetchRequest());
      const response = await fetch(BASE_URL + "ingredients/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      console.log(response);
      if (!response.ok) {
        throw {
          msg: "fetching error",
        };
      }

      const data = await response.json();
      const action = ingredientFetchSuccess(data);
      dispatch(action);
    } catch (error) {
      console.log("Fetch error:", error);
      dispatch(ingredientFetchFailed(error));
    }
  };
};
