import axios from "axios";
import { config } from "@/config/config";

export const api = axios.create({
  baseURL: config.apiUrl,
  timeout: 15000,
});

/**
 * Automatically set Content-Type
 * based on request body.
 */
api.interceptors.request.use(
  (request) => {
    if (request.data instanceof FormData) {
      // Browser automatically adds the multipart boundary.
      delete request.headers["Content-Type"];
    } else {
      request.headers["Content-Type"] = "application/json";
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);