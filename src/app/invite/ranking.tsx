import Image from 'next/image'

import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking(){
    return(
        <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
            Ranking de indicações
        </h2>

        <div className="space-y-4">
          <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"> 
            <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Mateus Macedo
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1.128
            </span>
            <Image src={gold} alt="" className="absolute top-58 right-39" />
          </div>

          <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Mariana Alves
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1.128
            </span>
            <Image src={silver} alt="" className="absolute top-87 right-39" />
          </div>

          <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Beatriz Sena
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1.128
            </span>
            <Image src={cooper} alt="" className="absolute top-116 right-39" />
          </div>
        </div>
      </div>
    )
}