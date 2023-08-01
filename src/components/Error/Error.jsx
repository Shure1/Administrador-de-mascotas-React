//TODO: con children podemos colocar cualquier prop y cuando se envie este children debe estar encerrado en dos etiqueras de este componente (como context)

const Error = ({children}) => {
  return (
    
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold rounded-md">
          {children}
        </div>
    
  )
}

export default Error