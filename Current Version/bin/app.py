import web
import os

urls = (
	'/', 'Index',
)

app = web.application(urls, globals())

render = web.template.render('templates/')

class Model(object):
	def GetLinks():
		TagFilePath = GetPathToStaticFolder + "\\Tags.csv"
		TagFile = None
		if(os.path.isfile(TagFilePath)):
			TagFile = TagFilePath
		Tags = ""
		TagStringToReturn = ""
		if(TagFile is None):
			Tags = TagFile.read().splitlines()
			TagStringToReturn = ""
			if(len(Tags) > 1): #Assuming file is well made
				TagStringToReturn = Tags[1] #skip the header
				for TagIndex in range(2, len(Tags)):
					TagStringToReturn += "|"
					TagStringToReturn += Tags[TagIndex]
			
		return TagStringToReturn #Each tag will be separated by a |
				
		
		
	@staticmethod
	def GetPathToStaticFolder():
		Path = os.getcwd()
		SplitPath = Path.split('\\')
		TagFilePath = SplitPath[0]

		for PathPartIndex in range(1, len(SplitPath) - 1):
			TagFilePath += "\\"
			TagFilePath += SplitPath[PathPartIndex]
			
		TagFilePath += "\\static"
		return TagFilePath
		
	def GetTags(whatWasPassedIn):
		return whatWasPassedIn
		


class Index(object):
	def GET(self):
		return render.Index(submitBack = "", courseTitle = "")
		
	def POST(self):
		form = web.input(submitBack = "", courseTitle = "")
		return render.Index(submitBack = "", courseTitle = form.SubmitBack)

		
		
if __name__ == "__main__":
	app.run()