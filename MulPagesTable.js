$(document).ready(function () {
  var vm = new Vue({
    el: "#content",
    data: {
      // addId: 1,
      addTime: setNowTime(),
      addLocal: "",
      addPerson: "",
      addMatter: "",
      addNote: "",
      pageIndex: 1,
      pageSize: 8,
      selectPage: "",
      tableData: [
        {
          id: 1,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 2,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 3,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 4,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 5,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 6,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 7,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 8,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 9,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 10,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 11,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 12,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 13,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 14,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 15,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 16,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 17,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 18,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 19,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        },
        {
          id: 20,
          time: "2018-9-10",
          local: "广西梧州",
          person: "张三",
          matter: "买车",
          note: "花了30w",
        }
      ],
    },
    methods: {
      doAdd: function () {
        this.tableData.push({
          id: this.addId,
          time: this.addTime,
          local: this.addLocal,
          person: this.addPerson,
          matter: this.addMatter,
          note: this.addNote
        });
        this.addLocal = "";
        this.addPerson = "";
        this.addMatter = "";
        this.addNote = "";
      },
      doDelete: function (index) {
        this.tableData.splice(index, 1);
      },
      doSelectPage: function (page) {
        if (page - 1 in this.pages) {
          this.pageIndex = page;
        }
        this.selectPage = "";
      }
    },
    computed: {
      addId: function () {
        return this.tableData.length+1;
      },
      // addTime: function () {
      //   var nowTime = new Date();
      //   return nowTime.getFullYear()
      //     + "-" + nowTime.getMonth()
      //     + "-" + nowTime.getDate()
      //     + " " + nowTime.getHours()
      //     + ":" + nowTime.getMinutes()
      //     + ":" + nowTime.getSeconds();
      // },
      pages: function () {
        var pages = [];
        for (var i = 1; i <= parseInt(this.tableData.length / (this.pageSize + 1)) + 1; i++) {
          pages.push(i);
        }
        return pages;
      }
    }
  });
  function setNowTime() {
      var nowTime = new Date();
      return nowTime.getFullYear()
        + "-" + (nowTime.getMonth() + 1)
        + "-" + nowTime.getDate()
        + " " + nowTime.getHours()
        + ":" + nowTime.getMinutes()
        + ":" + nowTime.getSeconds();
    }
  setInterval(function () {
    // console.log(new Date())
    vm.addTime = setNowTime();
  }, 1000);
});
