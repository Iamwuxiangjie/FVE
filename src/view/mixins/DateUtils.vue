<script>
  export default{
    methods:{
      dateFormat(time) {
        const date = new Date(time)
        const year=date.getFullYear();
        const month=date.getMonth()+1;
        const day=date.getDate();
        return `${year}-${month}-${day}`;
      },

      dateParse(val) {
        let date = new Date(val.replace(/-/g, '/'));
        return date;
      },

      add(date,day){
        let d=new Date(date);
        d.setDate(d.getDate()+day);
        return d;
      },

      addByNow(day){
        let d=new Date();
        d.setDate(d.getDate()+day);
        return d;
      },
    }
  }
</script>


