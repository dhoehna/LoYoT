import web
import os
import csv

urls = (
	'/', 'Index',
)

app = web.application(urls, globals())

render = web.template.render('templates/')

def GetPathToStaticFolder():
		Path = os.getcwd()
		SplitPath = Path.split('\\')
		TagFilePath = SplitPath[0]
		for PathPartIndex in range(1, len(SplitPath)):
			TagFilePath += "\\"
			TagFilePath += SplitPath[PathPartIndex]
			
		TagFilePath += "\\static"
		return TagFilePath

class Model(object):
	def __init__(self):
		pass
		
	def GetTags(self):
		TagFilePath = GetPathToStaticFolder() + "\\Tags.csv"
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
				
				
				
	def GetLinks(self, tags):
		tags = tags.replace("[","")
		tags = tags.replace("]","")
		firstString = tags.split(",")[0]
		secondString = tags.split(",")[1]
	
		endList = []
	
		f = open(GetPathToStaticFolder() + '\\Math.csv')
		csv_f = csv.reader(f)
		for row in csv_f:
			if " " + firstString == row[2]:
				if " " + secondString == row[3]:
					endList += row[1],row[0]
		f.close()
	
		return endList
		


class Index(object):
	def GET(self):
		return render.Index(submitBack = "", courseTitle = "")
		
	def POST(self):
		form = web.input(submitBack = "", courseTitle = "")
		model = Model()
		
		return render.Index(submitBack = "", courseTitle = model.GetLinks(form.submitBack))

		
		
if __name__ == "__main__":
	app.run()