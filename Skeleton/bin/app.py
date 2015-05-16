import web
import pyodbc

urls = (
	'/', 'Index',
	'/GetLinks', 'GetLinks'
)

app = web.application(urls, globals())

render = web.template.render('templates/')

class Model(object):
	def GetLinks():
		return "Hello Valentin!"


class Index(object):
	def GET(self):
		return render.Index() #TODO: replace with the proper html name.


class GetLinks(object):
	def GET(self):
		return render.MainScreen() #TODO: Change Main Screen to the actual name of the website.
		
	def POST(self):
		form = web.input()
		strGreeting = self.Model.GetLinks()
		return render.MainScreen(Greeting = strGreeting)
		
		
if __name__ == "__main__":
	app.run()