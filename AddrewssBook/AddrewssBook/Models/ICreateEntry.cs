using System;

namespace AddrewssBook.Models
{
    public class ICreateEntry
    {
        Guid Id { get; set; }
        string Name { get; set; }
        string PhoneNumber { get; set; }
        Guid PhonebookId { get; set; }
    }
}