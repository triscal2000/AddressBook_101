using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AddrewssBook.Models
{
    public class ContactResult
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<EntriesResult> Entries { get; set; }
    }
}