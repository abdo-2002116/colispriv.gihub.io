import React from 'react';

export default function Solution() {
  return (
    <>
      <div className='m-4 pl-10'>
        <div>
          <h1 className='text-4xl text-center font-serif font-bold py-8'>Gérez efficacement vos opérations logistiques avec notre assistance.</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between m-10">
          <div className="lg:w-3/5 flex flex-col ">
            <div className="flex flex-col py-4">
              <div className="flex flex-row mb-4">
                <img className='w-24 h-24' src={require('./image/tracking.png')} alt="Delivery Box"/>
                <div className="flex flex-col ml-5">
                  <div className="text-xl font-bold">Suivi en temps réel</div>
                  <div className="text-gray-500 text-lg font-bold">Gardez un œil sur vos commandes en temps réel, où que vous soyez et quand vous le souhaitez.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-row mb-4">
                <img className='w-24 h-24' src={require('./image/cash-on-delivery.png')} alt="Location"/>
                <div className="flex flex-col ml-5">
                  <div className="text-xl font-bold">Paiement à la livraison</div>
                  <div className="font-bold text-gray-500 text-lg">Gérez efficacement vos paiements et remboursements à la livraison.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-row mb-4">
                <img className='w-24 h-24' src={require('./image/call-center-agent.png')} alt="Call Center Agent"/>
                <div className="flex flex-col ml-5">
                  <div className="text-xl font-bold">Centre de relation client</div>
                  <div className="text-gray-500 text-lg font-bold">Un centre de relation client très réactif.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-row justify-between mb-4">
                <img className='w-24 h-24' src={require('./image/communication.png')} alt="Box"/>
                <div className="flex flex-col ml-5">
                  <div className="text-xl font-bold">Connecteurs et API</div>
                  <div className="text-gray-500 text-lg font-bold">Automatisez facilement et commodément l'expédition de vos colis. Des connecteurs sont disponibles pour toutes les plateformes de commerce électronique.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img className='bg-cover h-screen w-full rounded-lg' src={require('./image/Motorbike Man Leaning (HD)(2).png')} alt="Delivery Box"/>
          </div>
        </div>
      </div>
    </>
  );
}
