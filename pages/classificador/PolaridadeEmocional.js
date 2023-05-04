import { PolaridadeEmocionalText } from '@/data/text/classificador';
import Image from "next/image";

const PolaridadeEmocional = () => {
    return (
        <section>
            <div className={'flex p-20'}>
                <div className={'flex-1 max-w-5xl h-full p-10 rounded-3xl pb-31'}>
                    <div className={'text-secondary text-5xl font-bold mb-10'}>{PolaridadeEmocionalText.title}</div>
                    <div className={'text-p-bold text-2xl font-bold mb-10'}>{PolaridadeEmocionalText.description}</div>
                    <div className={'text-white text-2xl text-center'}>
                        <div className={'text-p-bold text-2xl font-bold mb-10'}>
                            <div className={'text-3xl'}>
                                <Image className={'inline-block ml-2'} src={'positive_icon.svg'} alt={''} width={40} height={40}/>
                            </div>
                            <div className={'text-classify-positive text-5xl'}>
                                {PolaridadeEmocionalText.positive_title}<br/>
                            </div>
                            <div>
                                {PolaridadeEmocionalText.positive_description}
                            </div>
                        </div>
                        <div className={'text-p-bold text-2xl font-bold mb-10'}>
                            <div className={'text-3xl'}>
                                <Image className={'inline-block ml-2'} src={'neutral_icon.svg'} alt={''} width={40} height={40}/>
                            </div>
                            <div className={'text-classify-neutral text-5xl'}>
                                {PolaridadeEmocionalText.neutral_title}<br/>
                            </div>
                            <div>
                                {PolaridadeEmocionalText.neutral_description}
                            </div>
                        </div>
                        <div className={'text-p-bold text-2xl font-bold mb-10'}>
                            <div className={'text-3xl'}>
                                <Image className={'inline-block ml-2'} src={'negative_icon.svg'} alt={''} width={40} height={40}/>
                            </div>
                            <div className={'text-classify-negative text-5xl'}>
                                {PolaridadeEmocionalText.negative_title}<br/>
                            </div>
                            <div>
                                {PolaridadeEmocionalText.negative_description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PolaridadeEmocional