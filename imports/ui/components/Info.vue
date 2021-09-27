<template>
  <div class="container-fluid">
    <h2>RANKINGS</h2>
    <p>Total Deaths on Games Shown: {{totalDeaths}}</p>
    <p>Total Time Spend on Games Shown: {{sumTime}}</p>    
    <!-- <ul>
      <li>
        <form class="info-link-add">
          <input type="text" v-model="title" name="title" placeholder="Title" required>
          <input type="url" v-model="url" name="url" placeholder="Url" required>
          <input type="submit" name="submit" @click="submit($event)" value="Add new link">
        </form>
      </li>
      <li v-for="link in links" :key="link.id"><a :href="link.url" target="_blank">{{link.title}}</a></li>
    </ul> -->
      <b-form-input type="text" v-model="filter" name="filter" placeholder="Search the records..."/>
      <b-form-group>
        <b-form-radio-group
          v-model="filterOn"
          :options="options"
          name="inline-radio"
        ></b-form-radio-group>
      </b-form-group>
  <div id="table-holder" class="container-fluid">
    <b-table striped v-model="showing" :items="records" :fields="fields" :small="true" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered"></b-table>
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
          sortable: true
        },
        {
          key: 'PLATFORM',
          sortable: true
        },
        {
          key: 'YEAR',
          sortable: true
        },
        {
          key: 'DEVELOPER',
          sortable: true
        },
        {
          key: 'PUBLISHER',
          sortable: true
        },
        {
          key: 'GENRE',
          sortable: true
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
      filter: null,
      filterOn: "TITLE",
      options: [ 'TITLE', 'SERIES', 'PLATFORM', 'DEVELOPER', 'PUBLISHER', 'GENRE'],
      showing: [],
      totalDeaths: 0,
      sumTime: 0,
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
    onFiltered() {
      this.totalDeaths = this.showing.reduce(function(prev, cur) {
        return prev + cur.DIED
      }, 0)
      let tempTime = this.showing.reduce((prev, cur) => prev + cur.TIME, 0)
      this.sumTime = this.totalTime(tempTime)
    }
  },
}
</script>

<style>
 
</style>
