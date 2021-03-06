export default {
  methods: {
    validation(fields) {
      let error = "";
      const format = {
        text: /[a-zA-Z0-9]+/,
        email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        phone: /[0-9]{10}/,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      };

      fields.forEach((field, index) => {
        if (!field.value.match(format[field.condition])) {
          error += field.name;
          error += index < fields.length - 1 ? "," : "";
        }
      });

      const language = localStorage.getItem("lang");

      const errorMessage =
        language === "tr"
          ? " alanlarını beklenilen formda doldurunuz."
          : " fill these fields as expected.";

      return {
        error: error.length > 0,
        message: error + errorMessage,
      };
    },

    /* {
         name: "",
         alue: "",
         condition: "",
        } */
  },
};
