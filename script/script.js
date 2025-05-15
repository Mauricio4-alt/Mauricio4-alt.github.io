let $ = id => document.getElementById(id)

function habilitarPerfil()
{
    let sectionPerfil = $('perfil')
    sectionPerfil.style.display ='block'

    let sectionHabilidades = $('habilidades')
    sectionHabilidades.style.display = 'none'

    let sectionTecnologias = $('tecnologias')
    sectionTecnologias.style.display ='none'
    let sectionExperiencia = $('experiencia')
    sectionExperiencia.style.display ='none'
    
    
}


function habilitarHabilidades()
{
    let sectionPerfil = $('perfil')
    sectionPerfil.style.display ='none'
    
    let sectionHabilidades = $('habilidades')
    sectionHabilidades.style.display = 'block'
    
    let sectionTecnologias = $('tecnologias')
    sectionTecnologias.style.display ='none'
    let sectionExperiencia = $('experiencia')
    sectionExperiencia.style.display ='none'

    
}
function habilitarTecnologias()
{
    let sectionPerfil = $('perfil')
    sectionPerfil.style.display ='none'
    
    let sectionHabilidades = $('habilidades')
    sectionHabilidades.style.display = 'none'
    
    let sectionTecnologias = $('tecnologias')
    sectionTecnologias.style.display ='block'
    
    let sectionExperiencia = $('experiencia')
    sectionExperiencia.style.display ='none'

}
function habilitarExperiencia()
{
    let sectionPerfil = $('perfil')
    sectionPerfil.style.display ='none'
    
    let sectionHabilidades = $('habilidades')
    sectionHabilidades.style.display = 'none'
    
    let sectionTecnologias = $('tecnologias')
    sectionTecnologias.style.display ='none'
    
    let sectionExperiencia = $('experiencia')
    sectionExperiencia.style.display ='block'

}



function iniciarApp()
{
    let botonPerfil = $('boton-perfil')
    let botonHabilidades = $('boton-habilidades')
    let botonTecnologias = $('boton-tecnologias')
    let botonExperiencia = $('boton-experiencia')

    botonPerfil.addEventListener('click',habilitarPerfil)
    botonHabilidades.addEventListener('click', habilitarHabilidades)
    botonTecnologias.addEventListener('click',habilitarTecnologias)
    botonExperiencia.addEventListener('click',habilitarExperiencia)
}

window.addEventListener('load',iniciarApp)