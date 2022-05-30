<template>
  <div class="vue-root">
    <smart-kanban id="kanban"></smart-kanban>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.kanban.js";

window.getKanbanData = function getKanbanData(locale = 'en') {
    const text = {
        en: [
            'Pizza 4 fromages', 'Pizza Hawaienne', 'Pizza Mexicaine', 'Pizza Peperoni',
            'Pizza Reine', 'Pizza 3 fromages'
        ]
    },
        tags = {
            en: ['allergies', 'ticket-restaurant', 'payée', 'non-payée', 'espèces', 'carte']
        },
        data = [
            {
                id: 0,
                status: 'toDo',
                text: text[locale][0],
                tags: tags[locale][3]+ ', ' + tags[locale][0]+ ', ' + tags[locale][5],
                color: 'red'

            }, {
                id: 1,
                status: 'inProgress',
                text: text[locale][3],
                tags: tags[locale][2]+ ', ' + tags[locale][1],
                color: 'yellow'

            }, {
                id: 2,
                status: 'ready',
                text: text[locale][2],
                tags: tags[locale][2] + ', ' + tags[locale][4]+ ', ' + tags[locale][0],
                color: 'green'
            }, {
                id: 3,
                status: 'inDelivrery',
                text: text[locale][5],
                tags: tags[locale][2] + ', ' + tags[locale][5],
                color: 'grey'
            }, {
                id: 4,
                status: 'done',
                text: text[locale][4],
                tags: tags[locale][2] + ', ' + tags[locale][5],
                color: 'black'
            }, {
                id: 5,
                status: 'toDo',
                text: text[locale][1],
                tags: tags[locale][1],
                color: 'red'
            }
        ]

    return data;
}	
export default {
  setup() {
    onMounted(() => {
      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              collapsible: true,
              dataSource: window.getKanbanData(),
              columns: [
                {
                  label: "Enregistrée",
                  dataField: "toDo"
                },
                {
                  label: "En preparation",
                  dataField: "inProgress"
                },
                {
                  label: "Prête",
                  dataField: "ready"
                },
                {
                  label: "En livraison",
                  dataField: "inDelivrery"
                },
                {
                  label: "Livrée",
                  dataField: "done"
                }
              ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
html,
body,
#kanban {
  width: 100%;
  height: 100%;
}

html,
body {
  margin: 0;
}
</style>
