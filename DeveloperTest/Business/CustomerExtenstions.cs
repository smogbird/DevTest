using DeveloperTest.Database.Models;
using DeveloperTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperTest.Business
{
    public static class CustomerExtenstions
    {
        public static CustomerModel[] Map(this IEnumerable<Customer> customers)
        {
            if (customers == null || customers.Count() < 1)
            {
                return new CustomerModel[] { };
            }

            return customers.Select(x => x.Map()).ToArray();            
        }

        public static CustomerModel Map(this Customer customer)
        {
            if(customer == null)
            {
                return null;
            }
            return new CustomerModel
            {
                CustomerId = customer.CustomerId,
                CustomerName = customer.Name,
                CustomerType = customer.CustomerType
            };
        }
    }
}
