using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MappingPluginLesson.Startup))]
namespace MappingPluginLesson
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
