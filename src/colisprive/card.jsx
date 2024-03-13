export default function Card(){

  


    return(

        <>
        
        <div id="service" className="gradient flex flex-col h-full  p-9 w-full md:w-auto">
         
             <div className="text-4xl W-full px-28  font-serif font-bold  text-center	">
            <p className=" backdrop-blur-md  m-8 rounded-lg p-5	bg-white/30	">Solutions fiables de logistique et de transport.</p>
          </div> 
       
       <div className="flex flex-row h-full" >
        <div class="relative flex flex-col mt-3 p-4 m-10 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105">
  <div class="px-6">
    <img src={require("./image/24 Hours Delivery (HD).png")}/>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Collecte à domicile
    </h5>
    <p class="block  font-sans text-base antialiased font-light leading-relaxed text-inherit">
    Nous nous chargeons de récupérer vos commandes directement depuis votre domicile, offrant ainsi un service complet et pratique. Nous prenons en charge tous les aspects.
    </p>
  </div>
  
</div>  
<div class="relative flex flex-col mt-3 p-4 m-10 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105">
  <div class=" px-6">
    <img src={require("./image/House With Garage (HD).png")}/>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Entrepôt & Stockage
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    Nous offrons des solutions intégrées auprès d'un unique prestataire pour répondre aux besoins de chaque type de client, quelle que soit sa taille ou sa localisation.    </p>
  </div>
  
</div>  
<div class="relative flex flex-col mt-3 p-4 m-10 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105">
  <div class="px-6">
    <img src={require("./image/Home (HD).png")} alt="Home" />
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Livraison à domicile
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Dotés d'une flotte de plus de 80 véhicules et livreurs, nous nous assurons que nos équipes sont formées et préparées pour ce métier, garantissant ainsi un service de livraison fiable et efficace.
    </p>
  </div>
  </div>
</div>

</div>
        </>
    )
}