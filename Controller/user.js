let user = [
    {id: 1, nama: "aldi", email: "aldi@gmail.com"},
    {id: 2, nama: "murdani", email: "murdani@gmail.com"},
]

module.exports = {
    index: (req, res) => {
        if(user.length > 0){
          res.json({
            status: true,
            data: user,
            method: req.method,
            url: req.url
          })
        }else{
          res.json({
            status: false,
            message: "data masih kosong"
          })
        }
      },
      store: (req, res) => {
        user.push(req.body)
        res.json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data berhasil ditambahkan"
        })
      },
      update: (req, res) => {
        const id = req.params.id
        user.filter(user =>{
          if (user == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
          }
        })
        res.json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data Behasil Diubah"
        })
      },
      delete: (req, res) => {
        const id = req.params.id
        user = user.filter(user => user.id !=id )
    
        res.json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data Berhasil Dihapus"
        })
      }
}