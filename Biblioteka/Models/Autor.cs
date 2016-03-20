﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Biblioteka.Models
{
    public class Autor
    {
        [ScaffoldColumn(false)]
        public long ID { get; set; }
        [StringLength(45)]
        public string naziv { get; set; }
        public virtual ICollection<Knjiga> Knjige { get; set; }
    }
}