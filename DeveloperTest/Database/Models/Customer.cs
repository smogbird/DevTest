﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperTest.Database.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string CustomerType { get; set; }
        public ICollection<Job> Jobs { get; set; }
    }
}
