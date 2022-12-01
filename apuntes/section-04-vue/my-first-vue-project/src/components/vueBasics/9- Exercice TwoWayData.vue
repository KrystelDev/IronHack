<!-- Montamos un formulario para ir al primavera sound.

  Vamos a incluirle un input type text para vuestro nombre y un input type email para el email. Vamos incorporar un select que nos permita escoger entre cinco artistas para ver en el festival. Después hacemos inputs separados que reciban propiedades booleanicas y que respondan a estas preguntas:
Consumes alcohol o drogas? (si/no)
Vas a venir vestid@ de negro? (si/no)
Tienes más de 21 años? (si/no)
Vienes con un grupo de más de 2 personas? (si/no)
Por ultimo hacemos input textarea para sugerencias de mejora del festival.
Cuando se envíe el formulario imprimiremos la info que se ha mandado con una alerta en el browser. -->

<template>
  <div >
    <div>
      <h1>Vota a tu artista favorito!</h1>
      <p>
        Rellena este formulario para solicitar a tu cantante favoritos para <strong>el primavera sound</strong>
      </p>
    </div>
    <div >
      <!-- <div id="form-v-model-visibilidad">
        <pre>{{ JSON.stringify(formValues, null, 1) }}</pre>
      </div> -->
      <form @submit.prevent="submitForm">
        <div >
          <label for="name">Nombre</label>
          <input
            type="text"
            autocomplete="off"
            id="name"
            v-model="formValues.formName"
            placeholder="Escribe tu nombre"
          />
        </div>

        <div>
          <label for="email">Email</label>
          <input type="email" autocomplete="off" id="email" v-model="formValues.formEmail" placeholder="Escribe tu email"/>
        </div>
        
        <div>
          <label for="artists">Artistas</label>
          <select name="artists" id="artists" v-model="formValues.artists">
            <option disabled selected>Selecciona tu artista favorito</option>
            <option value="beyonce">Beyoncé</option>
            <option value="shakira">Shakira</option>
            <option value="pets">Els pets</option>
            <option value="malu">Malú</option>
            <option value="estopa">Estopa</option>
          </select>
        </div>

        <div>
          <h2>Selecciona las frases correctas</h2>
          <div>
            <div class="multiple-checkboxes">
              <input type="checkbox" id="remoteConsum" v-model="formValues.remoteConsum" />
              <label for="emoteConsum">Consumo alcohol o drogas</label>
            </div>
          </div>
          
          <div>
            <div class="multiple-checkboxes">
              <input type="checkbox" id="remoteVestido" v-model="formValues.remoteVestido" />
              <label for="remoteWork">Iré vestid@ de negro</label>
            </div>
          </div>
          
          <div>
            <div class="multiple-checkboxes">
              <input type="checkbox" id="remoteAge" v-model="formValues.remoteAge" />
              <label for="remoteAge">Tengo más de 21 años</label>
            </div>
          </div>
          
          <div>
            <div class="multiple-checkboxes">
              <input type="checkbox" id="remoteCompanneros" v-model="formValues.remoteCompanneros" />
              <label for="remoteCompanneros">Voy con un grupo de más de 2 personas</label>
            </div>
          </div>
        </div>

        <div>
          <label for="sugerencias">Sugerencias de mejora del festival.:</label>
          <textarea name="sugerencias" id="sugerencias" cols="30" rows="10" v-model.trim.lazy="formValues.sugerencias" placeholder="No hay límite de carácteres, estamos deseando leer vuestras grandes ideas..."></textarea>
        </div>
        
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";


// Job Application Data  - stored within an object
const formValues = reactive({
  formName: "",
  formEmail: "",
  artists: "",
  remoteConsum: false,
  remoteVestido: false,
  remoteAge: false,
  remoteCompanneros: false,
  sugerencias: "",
});

const submitForm = () => {
  //   console.log("Form Values", formValues);
  alert(`
        !!Realizado!!
        Nosotros hemos recibido tus respuestas.
        Publicaremos el artista ganador en nuestra página web el proximo domingo.

        Datos registrados:
        Name: ${formValues.formName}
        Email: ${formValues.formEmail}
        Artista: ${formValues.artists}
        Consumo alchol o drogas: ${formValues.remoteConsum}
        Ropa Negra: ${formValues.remoteVestido}
        Irá acompañado por más de dos personas : ${formValues.remoteCompanneros}
        Sugerencias: ${formValues.sugerencias}
        `);
};
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
