import React from 'react'
import userBG from '../../images/userBG.jpg';

export const FragmentStats = () => {
    return (
        <div className='w-[850px] h-[350px] bg-white rounded-[20px]'>
            <div className='flex h-full'>
                <div className='grid h-full place-items-center mx-6'>
                    <div className='relative text-center'>
                        <img src={userBG} alt='bg'/>
                        <div className='absolute top-[1.6rem] left-7 font-semibold text-[20px]'>AM</div>
                    </div>
                    
                    <h2 className='font-semibold text-[20px] -mt-4'>Axel Montes de Oca</h2>
                    <p className='text-[#989898] -mt-8'>Admin</p>

                    <h3 className='font-medium text-[16px] -mt-6'>Estado general</h3>
                    <div className='grid w-full gap-y-3 -mt-4'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[14px] text-[#989898]'>Estado de la pagina</p>
                            <i className='fi fi-rr-check text-[#21D33D]/80'/>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='text-[14px] text-[#989898]'>Información faltante</p>
                            <i className='bi bi-exclamation-triangle text-[#D22020]'/>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='text-[14px] text-[#989898]'>SecureLock</p>
                            <i className='fi fi-rr-lock text-[#1235EF]'/>
                        </div>
                    </div>
                </div>

                <div className='bg-[#C4C4C4] relative w-[2px] h-[90%] rounded-full my-auto'/>

                <form className='flex flex-col items-center mx-10'>
                    <h2 className='font-bold text-[18px] mt-8 mb-[20px]'>Encriptación de archivos</h2>
                    <input className='shadow w-[225px] h-[35px] placeholder:text-[#959595] bg-[#D8D8D8]/40 appearance-none border-0 rounded-[8px] leading-tight focus:bg-white mb-[15px]' id='pass' type='password' placeholder='Contraseña'/>
                    <input className='shadow w-[225px] h-[35px] placeholder:text-[#959595] bg-[#D8D8D8]/40 appearance-none border-0 rounded-[8px] leading-tight focus:bg-white mb-[30px]' id='repass' type='password' placeholder='Reingrese la contraseña'/>

                    <div className='flex w-full justify-center'>
                        <button className='py-1 w-[100px] font-medium bg-emerald-400 rounded-md mr-[20px]'>Editar</button>
                        <button className='py-1 w-[100px] font-medium bg-[#779AF4] rounded-md'>Guardar</button>
                    </div>
                </form>

                <div className='bg-[#C4C4C4] relative w-[2px] h-[90%] rounded-full my-auto'/>

                <div className='flex flex-col items-center mx-auto'>
                    <h2 className='font-bold text-[18px] mt-8 mb-[20px]'>Encriptación de archivos</h2>

                    <div className='grid grid-cols-2 mb-2'>
                        <p className='w-[114px]'>Nombre</p>
                        <p className='w-full'>Archivo comp.</p>
                    </div>

                    <div className='grid grid-cols-2'>
                        <p className='w-[114px] pl-[12px]'>Katia</p>
                        <p className='w-full text-center'>26</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
