# Task-y pre MSBuild

<table border="0" cellpadding="3" cellspacing="0" width="100%">
    <tr>
        <th align="left" width="190">
            Task
        </th>
        <th align="left">
            Popis
        </th>
    </tr>
	<tr>
        <td>
            AddAssemblyResolveHandlerTask
        </td>
        <td>
            Task, ktorý pridá handler pre AppDomain.CurrentDomain.AssemblyResolve event a umožní tak v inline taskoch použitie custom assemblies.
        </td>
    </tr>	
	<tr>
        <td>
            DesaturateImageTask
        </td>
        <td>
            Task, ktorý aplikuje Desaturate filter na vstupný obrázok.
        </td>
    </tr>
	<tr>
        <td>
            GetEnvironmentVariableTask
        </td>
        <td>
            Task, pre načítanie obsahu premnnej prostredia.
        </td>
    </tr>
	<tr>
        <td>
            GetItemMetadataTask	
        </td>
        <td>
            Task, ktorý pre vstupný ItemGroup vráti zoznam jeho metadata keys.
        </td>
    </tr>
	<tr>
        <td>
            GetSolutionProjectsTask
        </td>
        <td>
            Task, ktorý pre zadaný solution vráti zoznam referencovaných projektov.
        </td>
    </tr>	
	<tr>
        <td>
            ImagesToBase64Task
        </td>
        <td>
            Vyhľadá vo vstupných css súboroch všetky referencie na lokálne obrázky, a nahradí ich za base64 string-y.
        </td>
    </tr>	
	<tr>
        <td>
            LessCompileTask
        </td>
        <td>
            Task pre skompilovanie less súborov do css.
        </td>
    </tr>		
	<tr>
        <td>
            PromptTask
        </td>
        <td>
            Task, ktorý vyzve užívateľa, aby zadal vstup. Pokiaľ nezadá vstup bude build pozastavený.
        </td>
    </tr>		
	<tr>
        <td>
            TokenReplaceTask
        </td>
        <td>
            Vo vstupných súboroch nahradí zadaný token/y.
        </td>
    </tr>	
	<tr>
        <td>
            UploadFileTask
        </td>
        <td>
            Task pre upload súborov.
        </td>
    </tr>	
</table>
