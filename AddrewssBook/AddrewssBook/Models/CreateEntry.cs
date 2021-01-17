using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AddrewssBook.Models
{
    public class CreateEntry
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public Guid PhonebookId { get; set; }
    }
}