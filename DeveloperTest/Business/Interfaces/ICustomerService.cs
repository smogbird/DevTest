using DeveloperTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperTest.Business.Interfaces
{
    public interface ICustomerService
    {
        CustomerModel GetCustomer(int customerId);
        CustomerModel[] GetCustomers();
       // CustomerTypeModel[] GetCustomerTypes();
        CustomerModel CreateCustomer(BaseCustomerModel baseCustomerModel);

    }
}
