let $ = id => document.getElementById(id)

function habilitarPerfil()
{
    let sectionPerfil = $('perfil')
    sectionPerfil.style.display ='flex'

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
    sectionHabilidades.style.display = 'flex'
    sectionHabilidades.style.display ='flex'
    sectionHabilidades.style.alignItems ='flex-start'
    sectionHabilidades.style.justifyContent ='center'
    sectionHabilidades.style.gap ='55px'
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
    sectionTecnologias.style.display ='flex'
    sectionTecnologias.style.alignItems ='flex-start'
    sectionTecnologias.style.justifyContent ='center'
    sectionTecnologias.style.gap ='55px'
    
    
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
    sectionExperiencia.style.display ='flex'
    sectionExperiencia.style.flexDirection ='column'
    sectionExperiencia.style.alignItems ='center'


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