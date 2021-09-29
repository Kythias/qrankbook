<template>
  <div class="container-fluid">
    <h2>RANKINGS</h2>
    <p>Total Deaths on Games Shown: {{totalDeaths}}</p>
    <p>Total Time Spend on Games Shown: {{sumTime}}</p>
    <b-input-group>
      <b-form-select v-model="filter.series" :options="seriesList">
        <template #first><b-form-select-option :value="null" disabled>-- Choose a Series --</b-form-select-option></template>
      </b-form-select>
      <b-input-group-append>
        <b-button variant="primary" :disabled="!filter.series" @click="filter.series = null">Clear</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-input-group>
      <b-form-input type="search" v-model="filter.title" name="filter" placeholder="Search the records..."/>
          <b-input-group-append>
            <b-button variant="primary" :disabled="!filter" @click="filter.title = ''">Clear</b-button>
          </b-input-group-append>
    </b-input-group>
    <b-form-checkbox-group
      v-model="filterOn"
      :options="options"
    >

    </b-form-checkbox-group>
    <!-- <b-form-group>
      <b-form-radio-group
        v-model="filterOn"
        :options="options"
        name="inline-radio"
      ></b-form-radio-group>
    </b-form-group> -->
  <div id="table-holder" class="container-fluid">
    <b-table striped v-model="showing" :items="records" :fields="fields" :small="true" :filter="filter" :filter-function="deepFilter" @filtered="onFiltered"></b-table>
  </div>
  </div>
</template>

<script>
import Links from '../../api/collections/Links'
import Records from '../../api/collections/Records'

export default {
  data() {
    return {
      fields: [
        {
          key: 'RANK',
          sortable: true
        },
        {
          key: 'TITLE',
          sortable: true
        },
        {
          key: 'SERIES',
          sortable: true,
          class: 'd-none d-lg-table-cell'
        },
        {
          key: 'PLATFORM',
          sortable: true,
          class: 'd-none d-md-table-cell'
        },
        {
          key: 'YEAR',
          sortable: true,
          class: 'd-none d-md-table-cell'
        },
        {
          key: 'DEVELOPER',
          sortable: true,
          class: 'd-none d-lg-table-cell'
        },
        {
          key: 'PUBLISHER',
          sortable: true,
          class: 'd-none d-lg-table-cell'
        },
        {
          key: 'GENRE',
          sortable: true,
          class: 'd-none d-lg-table-cell'
        },
        {
          key: 'EP',
          sortable: true,
          class: 'd-none d-lg-table-cell'
        },
        {
          key: 'DIED',
          sortable: true
        },
        {
          key: 'TIME',
          sortable: true,
          formatter: 'totalTime',
        }
      ],
      title: "",
      url: "",
      filter: {
        title: "",
        series: null,  
      },
      filterOn: [],
      options: [ ['TITLE'], ['SERIES'], ['PLATFORM'], ['DEVELOPER'], ['PUBLISHER'], ['GENRE']],
      showing: [],
      totalDeaths: 0,
      sumTime: 0,
      platformList: [],
      devList: [],
      publisherList: [],
      genreList: [],
      listMaster: [],
      seriesSelected: null,
    }
  },
  meteor: {
    $subscribe: {
      'links': [],
      'records': [],
    },
    links () {
      return Links.find({})
    },
    records () {
      return Records.find({})
    },
    updateInitials () {
      this.onFiltered()
      console.log("Meteor filtered called.")
      return
    },
    updateLists () {
      console.log("Update lists called")
      this.listMaster = this.records
      return
    }
  },
  methods: {
    submit(event) {
      event.preventDefault()
      Meteor.call('createLink', this.title, this.url, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.title = ''
          this.url = ''
        }
      })
    },
    totalTime(secs) {
      
      var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":") 
    },
    sumShowingTime() {
      return this.totalTime(this.showing.reduce((prev, cur) => prev + cur.TIME, 0))
    },
    sumShowingDeaths() {
      return this.showing.reduce((prev, cur) => prev + cur.DIED,0)
    },
    onFiltered() {
      this.sumTime = this.sumShowingTime()
      this.totalDeaths = this.sumShowingDeaths()
      console.log(...this.filterOn)
    },
    categoryChecks(row, criteria) {
      if (criteria.series && criteria.series != row.SERIES) {
          console.log("Series mismatch " + criteria.series + " and " + row.SERIES);
          return false
        } else {
          return true
        }
    },
    deepFilter(row, criteria) {

      if (criteria.title) {
        let workingTitle = criteria.title.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
        let regexTest = new RegExp(workingTitle, "i")
        let titleMatch = row.TITLE.match(regexTest)

        if (titleMatch < 1) {
          console.log(regexTest + " no match " + row.TITLE);
          return false
        } else {
          console.log(row.TITLE + " entered series check after correct title match")
          return this.categoryChecks(row, criteria)
        }
      } else {
        console.log(row.TITLE + " entered series check after no title entered")
        return this.categoryChecks(row, criteria)
      }
    }
  },
  computed: {
    seriesList () {
      console.log("Computational stuff happening...")
      return [...new Set(this.records.map(item => item.SERIES))]
    }
  }
}
</script>

<style>
 
</style>
