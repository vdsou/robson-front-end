<template>
  <div class="container">
    <form @submit.prevent="save">
      <label for="command">
        Command:
      </label>
      <input
        type="text"
        name="command"
        id="command"
        class="fields"
        v-model="command"
      />

      <label for="cmdReturn">
        Command Return:
      </label>
      <input
        type="text"
        name="cmdReturn"
        id="cmdReturn"
        class="fields"
        v-model="cmdReturn"
      />

      <label for="image">
        Image:
      </label>
      <input
        type="text"
        name="image"
        id="image"
        class="fields"
        v-model="image"
      />

      <label for="count">
        Count:
      </label>
      <input
        type="text"
        name="count"
        id="count"
        class="fields"
        v-model="count"
      />

      <label for="audioYt">Audio (Youtube link):</label>
      <input
        type="text"
        name="audioYt"
        id="audioYt"
        class="fields"
        v-model="audioYt"
      />
      <button type="submit" id="save" class="buttons">
        Save
      </button>
    </form>
  </div>
</template>
<script>
import api from "@/services/api";
import authHeader from "@/services/authHeader";
const auth = authHeader();
export default {
  name: "Insert",
  data() {
    return {
      command: "",
      cmdReturn: "",
      image: "",
      count: "",
      audioYt: "",
    };
  },
  methods: {
    save() {
      const data = {
        command: this.command,
        cmdReturn: this.cmdReturn,
        image: this.image,
        count: this.count,
        audioYt: this.audioYt,
      };
      const token = auth.authentication;
      if (data.count === "") {
        data.count = "";
      }
      api
        .post(
          "/commands/insert",
          { ...data },
          {
            headers: {
              authentication: token,
            },
          }
        )
        .then((response) => {
          this.resetForm()
          console.log(response.status);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resetForm() {
      this.command = "",
      this.cmdReturn = "",
      this.image = "",
      this.count = "",
      this.audioYt = "",
      this.$forceUpdate();
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  margin: 10px 0;
}
input[type="text"] {
  padding: 5px;
  height: 25px;
}
#save {
  cursor: pointer;
  border: none;
}
.buttons {
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
