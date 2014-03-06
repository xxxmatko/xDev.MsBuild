# xDev.MsBuild

Task-y a target-y pre MSBuild.

MSBuild target-y su implementované ako samostatné súbory s príponou ```*.targets```. Task-y sú implementované buď ako
samostatné súbory, ktorých názov má tvar ```<Nazov>Task.targets```, alebo ako ClassLibrary projekt. Ku každému task-u/target-u je pripojený aj testovací projekt.

## Použitie
Pre použitie súborov stačí v projektovom súbore pridať referenciu na požadovaný target:

```xml
<Import Project="TransformXml.targets"/>
```

Pre použitie task-u, ktorý je implementovaný ako ClassLibrary treba pridať referenciu na danú knižnicu:

```xml
<UsingTask TaskName="ImagesToBase64Task"
           AssemblyFile="$(MSBuildProjectDirectory)\[Build]\xDev.MsBuild.ImagesToBase64Task.dll" />
```
