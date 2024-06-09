import { style } from "../lib.js"

export default {
  template: /* HTML */ `
    <b-navbar class="bnb-navbar pt-2 pb-2" wrapper-class="container pl-3 pr-3">
      <template #brand>
        <b-navbar-item class="has-text-grey" tag="router-link" :to="{path: '/' }">
        <div class="bnb-navbar-logo"></div>
        <span class="has-text-link has-text-weight-bold">Beauty</span>&nbsp;/&nbsp;Makeup
        </b-navbar-item>
      </template>
      <template #end>
        
      </template>
    </b-navbar>
  `,
}

style(/* CSS */ `
  .bnb-navbar {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  }
  .bnb-navbar .container,
  .bnb-navbar .navbar-brand {
    min-height: unset;
  }
  .bnb-navbar-logo {
    width:40px;
    height:45px;
    background: url('logo.jpg');
    background-size: cover;
    border-radius: 100%;
  }
`)
