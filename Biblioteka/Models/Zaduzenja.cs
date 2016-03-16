﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Biblioteka.Models
{
    public class Zaduzenja
    {
        public long ID { get; set; }
        public string status { get; set; }
        public DateTime datum_zaduzenja { get; set; }
        public DateTime datum_vracanja { get; set; }
        public DateTime rok { get; set; }
        public int cekanje { get; set; }
        [Key]
        [ForeignKey("Korisnik")]
        public long KorisnikID { get; set; }
        [Key]
        [ForeignKey("Knjiga")]
        public long KnjigaID { get; set; }
        [Key]
        [ForeignKey("Zaposlenik")]
        public long ZaposlenikID{ get; set; }
        public virtual Korisnik Korisnik { get; set; }
        public virtual Knjiga Knjiga { get; set; }
        public virtual Korisnik Zaposlenik { get; set; }

    }
}