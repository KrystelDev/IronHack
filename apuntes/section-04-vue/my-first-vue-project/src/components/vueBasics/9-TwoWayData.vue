<template>
  <div class="form-class-container">
    <div>
      <h1>Form Class</h1>
      <p>
        Para poder conectar nuestros inputs[formControls] con nuestra
        data[formData], usamos la directiva v-model para poder implementar el
        concepto de <strong>two-way data handling</strong>
      </p>
    </div>
    <!-- WITHOUT v-model -->
    <!-- <label for="message">Message:</label>
    <input
      id="message"
      :value="message"
      @input="(event) => (message = event.target.value)"
    />
    <h1>Message is {{ message }}</h1> -->

    <!-- WITH v-model -->
    <!-- <label for="message">Message:</label>
    <input id="message" v-model="message" />
    <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
    <h1>Message is {{ message }}</h1> -->

    <!-- Job Application Form -->
    <div id="myForm">
      <div id="form-v-model-visibilidad">
        <pre>{{ JSON.stringify(formValues, null, 1) }}</pre>
      </div>
      <form @submit.prevent="submitForm">
        <div id="user-input-formName-data">
          <label for="name">Enter Name</label>
          <input
            type="text"
            autocomplete="off"
            id="name"
            v-model="formValues.formName"
          />
        </div>
        <div id="user-input-profileSUmmary-data">
          <label for="profile">Enter your profile Summary:</label>
          <textarea
            name="profile"
            id="profile"
            cols="30"
            rows="10"
            v-model.trim.lazy="formValues.profileSummary"
          ></textarea>
        </div>
        <div id="user-input-country-data">
          <label for="country">Country</label>
          <select name="country" id="country" v-model="formValues.country">
            <option>Select a country of origin:</option>
            <option value="brazil">Brazil</option>
            <option value="argentina">Argentina</option>
            <option value="ecuador">Ecuador</option>
            <option value="chile">Chile</option>
          </select>
        </div>
        <div id="user-input-jobLocation-data">
          <label for="jobLocation">
            Are you willing to move to any of these European countries?
          </label>
          <select
            name="jobLocation"
            id="jobLocation"
            multiple
            v-model="formValues.jobLocation"
          >
            <option>Select a countries</option>
            <option value="spain">Spain</option>
            <option value="portugal">Portugal</option>
            <option value="germany">Germany</option>
            <option value="austria">Austria</option>
          </select>
        </div>
        <div id="user-input-skillSet-data">
          <label>What are your programming skillz?</label>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="vue"
              value="vue"
              v-model="formValues.skillSet"
            />
            <label for="vue">Vue</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="html"
              value="html"
              v-model="formValues.skillSet"
            />
            <label for="html">HTML</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="js"
              value="js"
              v-model="formValues.skillSet"
            />
            <label for="js">Javascript</label>
          </div>
        </div>
        <div id="user-input-rearsOfExp-data">
          <label>Years of experience</label>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="0-3"
              value="0-3"
              v-model="formValues.yearsOfExperience"
            />
            <label for="0-3">0-3 Years</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="3-8"
              value="3-8"
              v-model="formValues.yearsOfExperience"
            />
            <label for="3-8">3-8 Years</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="8-godStatus"
              value="8-godStatus"
              v-model="formValues.yearsOfExperience"
            />
            <label for="8-godStatus"
              >8 - Steve Wozniak Status of Experience</label
            >
          </div>
        </div>
        <div id="user-input-remoteWork-data">
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="remoteWork"
              v-model="formValues.remoteWork"
            />
            <label for="remoteWork">Are you open to work fully remote?</label>
          </div>
        </div>
        <div id="user-input-profileAge-data">
          <label for="profileAge">How old are you?</label>
          <input
            type="number"
            id="profileAge"
            v-model.number="formValues.profileAge"
          />
        </div>
        <input type="submit" value="Submit Form" />
      </form>
    </div>

    <div id="class-excercise"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const message = ref("");

// Job Application Data  - stored within an object
const formValues = reactive({
  formName: "",
  profileSummary: "",
  country: "",
  jobLocation: [],
  remoteWork: false,
  skillSet: [],
  yearsOfExperience: "",
  profileAge: null,
});

const submitForm = () => {
  //   console.log("Form Values", formValues);
  alert(`
        !!SUCCESS!!
        We succesfully received your job application form. We will get in contact with you in up to 7 days. Thanks for applying to...
        Name: ${formValues.formName}
        Profile Summary: ${formValues.profileSummary}
        Country: ${formValues.country}
        Job Location: ${formValues.jobLocation}
        Willing to work Remote: ${formValues.remoteWork}
        Programming Skillset: ${formValues.skillSet}
        Years of Experience: ${formValues.yearsOfExperience}
        Applicant Age: ${formValues.profileAge}
        `);
};

// -----
// -----
// -----
// -----
// -----
// -----
// CLASS EXCERCISE
// Montamos un formulario para ir al primavera sound. Vamos a incluirle un input type text para vuestro nombre y un input type email para el email. Vamos incorporar un select que nos permita escoger entre cinco artistas para ver en el festival. Después hacemos inputs separados que reciban propiedades booleanicas y que respondan a estas preguntas:
// Consumes alcohol o drogas? (si/no)
// Vas a venir vestid@ de negro? (si/no)
// Tienes más de 21 años? (si/no)
// Vienes con un grupo de más de 2 personas? (si/no)
// Por ultimo hacemos input textarea para sugerencias de mejora del festival.
// Cuando se envíe el formulario imprimiremos la info que se ha mandado con una alerta en el browser.
</script>

<style scoped>
pre {
  font-size: 24px;
}
div {
  display: flex;
  flex-direction: column;
}

.multiple-checkboxes {
  display: flex;
  flex-direction: row;
}

.form-class-container {
  min-width: 75%;
}

label {
  font-size: 1rem;
}
</style>
