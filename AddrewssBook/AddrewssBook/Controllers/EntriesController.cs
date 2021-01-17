using System;
using System.Data;
using System.Linq;
using System.Web.Http;
using AddrewssBook.Models;
using Newtonsoft.Json;

namespace AddrewssBook.Controllers
{
    public class EntriesController : ApiController
    {
        [HttpPost]
        public Response Create([FromBody] CreateEntry contact)
        {
            if(contact.PhonebookId == null || contact.PhonebookId == Guid.Empty)
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Record Must Link to a Contact"
                };
            }

            if (contact.Id != null || contact.Id == Guid.Empty)
            {
                var ct = new entry()
                {
                    Name = contact.Name,
                    PhoneNumber = contact.PhoneNumber,
                    PhonebookId = contact.PhonebookId,
                    Id = Guid.NewGuid()
                };
                
                using (var dbCtx = new AddressBookEntities())
                {
                    dbCtx.entries.Add(ct);
                    dbCtx.SaveChanges();
                }

                return new Response
                {
                    Status = "Success",
                    Message = "Record SuccessFully Added."
                };

            }
            else
            {
                using (var dbCtx = new AddressBookEntities())
                {
                    var pb = (from s in dbCtx.entries
                              where s.Id == contact.Id
                              select s).FirstOrDefault();
                    
                    pb.Name = contact.Name;
                    pb.PhoneNumber = contact.PhoneNumber;

                    dbCtx.SaveChanges();
                }

                return new Response
                {
                    Status = "Success",
                    Message = "Record SuccessFully Updated."
                };
            }
        }

        [HttpPost]
        public object Search([FromBody] GetEntries query)
        {
            using (var dbCtx = new AddressBookEntities())
            {
                var pb = (from s in dbCtx.entries
                          where s.PhonebookId == query.PhonebookId
                          select s).ToList();

                return JsonConvert.DeserializeObject<EntriesResult[]>(JsonConvert.SerializeObject(pb));
            }
        }
    }
}
