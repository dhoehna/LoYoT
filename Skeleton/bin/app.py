import web
import pyodbc

urls = (
	'/', 'Index',
)

app = web.application(urls, globals())

render = web.template.render('templates/')

class Model(object):
	def GetLinks():
		return "Hello Valentin!"


class Index(object):
	def GET(self):
		return render.Index(courseTitle = "My course Title", resultsTable = ["Hello"])

		
		
if __name__ == "__main__":
	app.run()