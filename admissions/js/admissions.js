let slug = window.location.href.match(/[^#]+/g)
if(slug[slug.length-1]==="btech")
{
  location.reload;

  document.getElementById("mtech").style.display="none";
  document.getElementById("msc").style.display="none";
  document.getElementById("mba").style.display="none";
  document.getElementById("phd").style.display="none";
  document.getElementById("foreign").style.display="none";
  document.getElementById("btech").style.display="block";
  document.getElementById("btechtab").style.display="block";
  document.getElementById("mtechtab").style.display="none";
  document.getElementById("msctab").style.display="none";
  document.getElementById("mbatab").style.display="none";
  document.getElementById("phdtab").style.display="none";
  document.getElementById("foreignadmissiontab").style.display="none";
  document.getElementsByClassName("active2")[0].classList.remove("active2");
  document.getElementById("btechsidetab").classList.add("active2");
  document.getElementById("resp_sidetab_mtech").classList.add("active2")
  document.getElementsByClassName("active2")[1].classList.remove("active2");
}
if(slug[slug.length-1]==="mtech")
{
location.reload;

document.getElementById("btech").style.display="none";
document.getElementById("msc").style.display="none";
document.getElementById("mba").style.display="none";
document.getElementById("phd").style.display="none";
document.getElementById("foreign").style.display="none";
document.getElementById("mtech").style.display="block";
document.getElementById("btechtab").style.display="none";
document.getElementById("msctab").style.display="none";
document.getElementById("mbatab").style.display="none";
document.getElementById("phdtab").style.display="none";
document.getElementById("foreignadmissiontab").style.display="none";
document.getElementById("mtechtab").style.display="block";

document.getElementsByClassName("active2")[0].classList.remove("active2");
document.getElementById("mtechsidetab").classList.add("active2");
document.getElementById("resp_sidetab_mtech").classList.add("active2")
document.getElementsByClassName("active2")[1].classList.remove("active2");
}

else if(slug[slug.length-1]==="msc")
{
location.reload;

document.getElementById("btech").style.display="none";
document.getElementById("mtech").style.display="none";
document.getElementById("mba").style.display="none";
document.getElementById("phd").style.display="none";
document.getElementById("foreign").style.display="none";
document.getElementById("msc").style.display="block";
document.getElementById("btechtab").style.display="none";
document.getElementById("mtechtab").style.display="none";
document.getElementById("mbatab").style.display="none";
document.getElementById("phdtab").style.display="none";
document.getElementById("foreignadmissiontab").style.display="none";
document.getElementById("msctab").style.display="block";
document.getElementsByClassName("active2")[0].classList.remove("active2");
document.getElementById("mscsidetab").classList.add("active2");
document.getElementById("resp_sidetab_msc").classList.add("active2")
document.getElementsByClassName("active2")[1].classList.remove("active2");
}
else if(slug[slug.length-1]==="mba")
{
location.reload;

document.getElementById("btech").style.display="none";
document.getElementById("msc").style.display="none";
document.getElementById("mtech").style.display="none";
document.getElementById("phd").style.display="none";
document.getElementById("foreign").style.display="none";
document.getElementById("mba").style.display="block";
document.getElementById("btechtab").style.display="none";
document.getElementById("mtechtab").style.display="none";
document.getElementById("msctab").style.display="none";
document.getElementById("phdtab").style.display="none";
document.getElementById("foreignadmissiontab").style.display="none";
document.getElementById("mbatab").style.display="block";
document.getElementsByClassName("active2")[0].classList.remove("active2");
document.getElementById("mbasidetab").classList.add("active2");
document.getElementById("resp_sidetab_mba").classList.add("active2")
document.getElementsByClassName("active2")[1].classList.remove("active2");
}
else if(slug[slug.length-1]==="phd")
{
location.reload;

document.getElementById("btech").style.display="none";
document.getElementById("msc").style.display="none";
document.getElementById("mba").style.display="none";
document.getElementById("mtech").style.display="none";
document.getElementById("foreign").style.display="none";
document.getElementById("phd").style.display="block";
document.getElementById("btechtab").style.display="none";
document.getElementById("mtechtab").style.display="none";
document.getElementById("msctab").style.display="none";
document.getElementById("mbatab").style.display="none";
document.getElementById("foreignadmissiontab").style.display="none";
document.getElementById("phdtab").style.display="block";
document.getElementsByClassName("active2")[0].classList.remove("active2");
document.getElementById("phdsidetab").classList.add("active2");
document.getElementById("resp_sidetab_phd").classList.add("active2")
document.getElementsByClassName("active2")[1].classList.remove("active2");
}
else if(slug[slug.length-1]==="foreign_admissions")
{
location.reload;

document.getElementById("btech").style.display="none";
document.getElementById("msc").style.display="none";
document.getElementById("mba").style.display="none";
document.getElementById("phd").style.display="none";
document.getElementById("mtech").style.display="none";
document.getElementById("foreign").style.display="block";

document.getElementById("btechtab").style.display="none";
document.getElementById("mtechtab").style.display="none";
document.getElementById("msctab").style.display="none";
document.getElementById("mbatab").style.display="none";
document.getElementById("phdtab").style.display="none";

document.getElementById("foreignadmissiontab").style.display="block";
document.getElementsByClassName("active2")[0].classList.remove("active2");
document.getElementById("foreignsidetab").classList.add("active2");
document.getElementById("resp_sidetab_foreign_admissions").classList.add("active2")
document.getElementsByClassName("active2")[1].classList.remove("active2");
}

 window.onhashchange = function(){
  let slug = window.location.href.match(/[^#]+/g)
  if(slug[slug.length-1]==="btech")
  {
    location.reload;
  
    document.getElementById("mtech").style.display="none";
    document.getElementById("msc").style.display="none";
    document.getElementById("mba").style.display="none";
    document.getElementById("phd").style.display="none";
    document.getElementById("foreign").style.display="none";
    document.getElementById("btech").style.display="block";
    document.getElementById("btechtab").style.display="block";
    document.getElementById("mtechtab").style.display="none";
    document.getElementById("msctab").style.display="none";
    document.getElementById("mbatab").style.display="none";
    document.getElementById("phdtab").style.display="none";
    document.getElementById("foreignadmissiontab").style.display="none";
    document.getElementsByClassName("active2")[0].classList.remove("active2");
    document.getElementById("btechsidetab").classList.add("active2");
    document.getElementById("resp_sidetab_mtech").classList.add("active2")
    document.getElementsByClassName("active2")[1].classList.remove("active2");
  }
  if(slug[slug.length-1]==="mtech")
  {
  location.reload;
 
  document.getElementById("btech").style.display="none";
  document.getElementById("msc").style.display="none";
  document.getElementById("mba").style.display="none";
  document.getElementById("phd").style.display="none";
  document.getElementById("foreign").style.display="none";
  document.getElementById("mtech").style.display="block";
  document.getElementById("btechtab").style.display="none";
  document.getElementById("msctab").style.display="none";
  document.getElementById("mbatab").style.display="none";
  document.getElementById("phdtab").style.display="none";
  document.getElementById("foreignadmissiontab").style.display="none";
  document.getElementById("mtechtab").style.display="block";
  
  document.getElementsByClassName("active2")[0].classList.remove("active2");
  document.getElementById("mtechsidetab").classList.add("active2");
  document.getElementById("resp_sidetab_mtech").classList.add("active2")
  document.getElementsByClassName("active2")[1].classList.remove("active2");
  }
  
  else if(slug[slug.length-1]==="msc")
  {
  location.reload;
 
  document.getElementById("btech").style.display="none";
  document.getElementById("mtech").style.display="none";
  document.getElementById("mba").style.display="none";
  document.getElementById("phd").style.display="none";
  document.getElementById("foreign").style.display="none";
  document.getElementById("msc").style.display="block";
  document.getElementById("btechtab").style.display="none";
  document.getElementById("mtechtab").style.display="none";
  document.getElementById("mbatab").style.display="none";
  document.getElementById("phdtab").style.display="none";
  document.getElementById("foreignadmissiontab").style.display="none";
  document.getElementById("msctab").style.display="block";
  document.getElementsByClassName("active2")[0].classList.remove("active2");
  document.getElementById("mscsidetab").classList.add("active2");
  document.getElementById("resp_sidetab_msc").classList.add("active2")
  document.getElementsByClassName("active2")[1].classList.remove("active2");
  }
  else if(slug[slug.length-1]==="mba")
  {
  location.reload;
 
  document.getElementById("btech").style.display="none";
  document.getElementById("msc").style.display="none";
  document.getElementById("mtech").style.display="none";
  document.getElementById("phd").style.display="none";
  document.getElementById("foreign").style.display="none";
  document.getElementById("mba").style.display="block";
  document.getElementById("btechtab").style.display="none";
  document.getElementById("mtechtab").style.display="none";
  document.getElementById("msctab").style.display="none";
  document.getElementById("phdtab").style.display="none";
  document.getElementById("foreignadmissiontab").style.display="none";
  document.getElementById("mbatab").style.display="block";
  document.getElementsByClassName("active2")[0].classList.remove("active2");
  document.getElementById("mbasidetab").classList.add("active2");
  document.getElementById("resp_sidetab_mba").classList.add("active2")
  document.getElementsByClassName("active2")[1].classList.remove("active2");
  }
  else if(slug[slug.length-1]==="phd")
  {
  location.reload;

  document.getElementById("btech").style.display="none";
  document.getElementById("msc").style.display="none";
  document.getElementById("mba").style.display="none";
  document.getElementById("mtech").style.display="none";
  document.getElementById("foreign").style.display="none";
  document.getElementById("phd").style.display="block";
  document.getElementById("btechtab").style.display="none";
  document.getElementById("mtechtab").style.display="none";
  document.getElementById("msctab").style.display="none";
  document.getElementById("mbatab").style.display="none";
  document.getElementById("foreignadmissiontab").style.display="none";
  document.getElementById("phdtab").style.display="block";
  document.getElementsByClassName("active2")[0].classList.remove("active2");
  document.getElementById("phdsidetab").classList.add("active2");
  document.getElementById("resp_sidetab_phd").classList.add("active2")
  document.getElementsByClassName("active2")[1].classList.remove("active2");
  }
  else if(slug[slug.length-1]==="foreign_admissions")
  {
  location.reload;
  scrollY=0;
  document.getElementById("btech").style.display="none";
  document.getElementById("msc").style.display="none";
  document.getElementById("mba").style.display="none";
  document.getElementById("phd").style.display="none";
  document.getElementById("mtech").style.display="none";
  document.getElementById("foreign").style.display="block";
  
  document.getElementById("btechtab").style.display="none";
  document.getElementById("mtechtab").style.display="none";
  document.getElementById("msctab").style.display="none";
  document.getElementById("mbatab").style.display="none";
  document.getElementById("phdtab").style.display="none";
  
  document.getElementById("foreignadmissiontab").style.display="block";
  document.getElementsByClassName("active2")[0].classList.remove("active2");
  document.getElementById("foreignsidetab").classList.add("active2");
  document.getElementById("resp_sidetab_foreign_admissions").classList.add("active2")
  document.getElementsByClassName("active2")[1].classList.remove("active2");
  }
}